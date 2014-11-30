angular.module('table-filter',['dropdown'])

/***************************
/ Service to maintain table data for filtering and sorting
/***************************/

.service('tableFilterService', function($rootScope, $filter) {
    var self = this;
    var rows = [];
    var filteredRows = [];
    var filteredOptions = [];
    
    // Load the data rows into the service
    this.initRows = function(dataRows) {
        rows = dataRows;
    };
    
    // Create filter options from column and store in service
    this.initColFilter = function(column) {
        var options = self.buildColOptions(column);
        
        var index = _.findIndex(filteredOptions, {column: column});
        if (index >= 0 ) {
            filteredOptions[index] = {column: column, options: options};
        }
        else {
            filteredOptions.push({column: column, options: options});
        }
        
        return options;
    };
    
    // Update selected options for column filter
    this.updateOptions = function(column, options) {
        var index = colIndex(column);
        filteredOptions[index] = {column: column, options: options};
        self.updateRows();
    };
    
    // Sort column
    this.sortColumn = function(column, direction) {
        var orderBy = $filter('orderBy');
        var reverse = false;
        
        if (direction === 'desc' || direction == 'descending') {
            reverse = true;
        }
        
        filteredRows = orderBy(filteredRows, column, reverse);
        self.broadcast();
    };
    
    // Update filtered rows after a column has been filtered
    self.updateRows = function() {
        filteredRows = angular.copy(rows);
        for (var i = 0; i < filteredOptions.length; i++) {
            filteredRows = filterRows(filteredRows, filteredOptions[i].column, filteredOptions[i].options);
        }
        
        self.broadcast();
    };
    
    self.broadcast = function() {
        $rootScope.$broadcast('filterRows', filteredRows);
    }
    
    this.selectColOptions = function(options, selectedOptions) {

    };
    
    this.checkAll = function(column) {
        var index = colIndex(column);
        var options = filteredOptions[index].options;
        
        for( var i = 0; i < options.length; i++ ) {
            options[i].selected = true;
        }        
    };
    
    this.uncheckAll = function(column) {
        var index = colIndex(column);
        var options = filteredOptions[index].options;
        
        for( var i = 0; i < options.length; i++ ) {
            options[i].selected = false;
        } 
    };
    
    // Creates the options for a column filter
    self.buildColOptions = function(column) {
        return _(rows).pluck(column).uniq().sortBy().map(function(val) {
            return {value: val, selected: true};
        }).value();
    };
    
    // Filters data rows bases on selected options in a column
    function filterRows(rows, column, options) {
        var filtered = [];
        
        for (var i = 0; i < rows.length; i++) {
            for (var j = 0; j < options.length; j++) {
                if (rows[i][column] == options[j].value && options[j].selected === true) {
                    filtered.push(rows[i]);
                }
            }
        }
        return filtered;
    }
    
    // Retrieves index of column options in filteredOptions collection
    function colIndex(column) {
        return _.findIndex(filteredOptions, {column: column});
    }
})

.controller('TableFilterCtrl', ['$scope', '$attrs', 'tableFilterService', function($scope, $attrs, tableFilterService) {
    var self = this;
    tableFilterService.initRows($scope.rows);
    $scope.$on('filterRows', function(evt, filteredRows) {
       $scope.rows = filteredRows;
    });
}])

.controller('DropdownFilterCtrl', ['$scope', '$attrs', 'tableFilterService', function($scope, $attrs, tableFilterService) {
    $scope.options = tableFilterService.initColFilter($attrs.column);
    
    $scope.$watch('options', function(newVal, oldVal) {
       tableFilterService.updateOptions($attrs.column, $scope.options);
    }, true);
    
    $scope.checkAll = function() {
        tableFilterService.checkAll($attrs.column);
    };
    
    $scope.uncheckAll = function() {
        tableFilterService.uncheckAll($attrs.column);
    };
    
    $scope.sort = function(direction) {
        tableFilterService.sortColumn($attrs.column, direction);
    };
}])

.directive('tableFilter', function() {
    return {
        restrict: 'EA',
        scope: {
            rows: '='
        },
        controller: 'TableFilterCtrl'
    };
})

.directive('dropdownFilter', function() {
    return {
        restrict: 'EA',
        require: '?^tableFilter',
        scope: {},
        controller: 'DropdownFilterCtrl',
        templateUrl: 'views/dropdownFilter.html'
    };
});