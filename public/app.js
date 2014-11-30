angular.module('MyApp', ['table-filter', 'dropdown'])

.factory('FooData', function() {
    var data = [
      {
        "_id": "54332b7528e9ef8d1ca8984e",
        "age": 36,
        "name": "Blanca Savage",
        "gender": "female",
        "company": "BILLMED",
        "email": "blancasavage@billmed.com",
        "phone": "+1 (801) 436-3950"
      },
      {
        "_id": "54332b75a270a158f488b0c7",
        "age": 24,
        "name": "Everett Clemons",
        "gender": "male",
        "company": "HOUSEDOWN",
        "email": "everettclemons@housedown.com",
        "phone": "+1 (890) 435-2290"
      },
      {
        "_id": "54332b750f6a132609d22321",
        "age": 35,
        "name": "Jones Rodgers",
        "gender": "male",
        "company": "FIBRODYNE",
        "email": "jonesrodgers@fibrodyne.com",
        "phone": "+1 (975) 584-3251"
      },
      {
        "_id": "54332b7535602ffafc9dc62d",
        "age": 24,
        "name": "Cain Moon",
        "gender": "male",
        "company": "PORTICO",
        "email": "cainmoon@portico.com",
        "phone": "+1 (911) 596-3203"
      },
      {
        "_id": "54332b751ce97dbdbbfd798b",
        "age": 26,
        "name": "Guadalupe Munoz",
        "gender": "female",
        "company": "GORGANIC",
        "email": "guadalupemunoz@gorganic.com",
        "phone": "+1 (925) 479-2138"
      },
      {
        "_id": "54332b75989864c002bfb4d0",
        "age": 36,
        "name": "Marquita Hayden",
        "gender": "female",
        "company": "ESSENSIA",
        "email": "marquitahayden@essensia.com",
        "phone": "+1 (814) 457-2281"
      },
      {
        "_id": "54332b757545e31e1776f047",
        "age": 29,
        "name": "Claudine Guthrie",
        "gender": "female",
        "company": "XELEGYL",
        "email": "claudineguthrie@xelegyl.com",
        "phone": "+1 (862) 424-2535"
      },
      {
        "_id": "54332b752587bc0e71305cf4",
        "age": 36,
        "name": "Sharlene Wells",
        "gender": "female",
        "company": "ECRAZE",
        "email": "sharlenewells@ecraze.com",
        "phone": "+1 (881) 499-2727"
      },
      {
        "_id": "54332b756a795afa6fd88b0b",
        "age": 26,
        "name": "Strickland Callahan",
        "gender": "male",
        "company": "TERRAGEN",
        "email": "stricklandcallahan@terragen.com",
        "phone": "+1 (821) 492-3730"
      },
      {
        "_id": "54332b75a271b0110018b4c8",
        "age": 32,
        "name": "Erma Wise",
        "gender": "female",
        "company": "AEORA",
        "email": "ermawise@aeora.com",
        "phone": "+1 (850) 405-3581"
      },
      {
        "_id": "54332b753b35ecc66b44fe82",
        "age": 26,
        "name": "Berry Ford",
        "gender": "male",
        "company": "ZORROMOP",
        "email": "berryford@zorromop.com",
        "phone": "+1 (970) 506-3892"
      },
      {
        "_id": "54332b755c6e1db0553ab38f",
        "age": 39,
        "name": "White Tyson",
        "gender": "male",
        "company": "NETAGY",
        "email": "whitetyson@netagy.com",
        "phone": "+1 (951) 530-2470"
      },
      {
        "_id": "54332b7580a073b335870485",
        "age": 22,
        "name": "Mcdowell Winters",
        "gender": "male",
        "company": "FUTURITY",
        "email": "mcdowellwinters@futurity.com",
        "phone": "+1 (806) 438-3164"
      },
      {
        "_id": "54332b75352c99ffa719d24f",
        "age": 37,
        "name": "Mcmillan Stewart",
        "gender": "male",
        "company": "PAPRICUT",
        "email": "mcmillanstewart@papricut.com",
        "phone": "+1 (872) 572-2284"
      },
      {
        "_id": "54332b75d1bfc584c8f63214",
        "age": 39,
        "name": "Hancock Bailey",
        "gender": "male",
        "company": "LUXURIA",
        "email": "hancockbailey@luxuria.com",
        "phone": "+1 (810) 402-2398"
      },
      {
        "_id": "54332b750a07472d058503d8",
        "age": 29,
        "name": "Hollie Collins",
        "gender": "female",
        "company": "ELITA",
        "email": "holliecollins@elita.com",
        "phone": "+1 (947) 441-3829"
      },
      {
        "_id": "54332b754101b84a634f3310",
        "age": 33,
        "name": "Mcpherson Cervantes",
        "gender": "male",
        "company": "ZIDOX",
        "email": "mcphersoncervantes@zidox.com",
        "phone": "+1 (919) 521-2859"
      },
      {
        "_id": "54332b75e0f21e0647d31d88",
        "age": 28,
        "name": "Dorothea Guy",
        "gender": "female",
        "company": "MEDALERT",
        "email": "dorotheaguy@medalert.com",
        "phone": "+1 (844) 516-3488"
      },
      {
        "_id": "54332b7555a65e7a734c300f",
        "age": 29,
        "name": "Spence Dale",
        "gender": "male",
        "company": "NEUROCELL",
        "email": "spencedale@neurocell.com",
        "phone": "+1 (807) 512-3950"
      },
      {
        "_id": "54332b75a34eb343a0e4806d",
        "age": 26,
        "name": "Doyle Bowman",
        "gender": "male",
        "company": "SPACEWAX",
        "email": "doylebowman@spacewax.com",
        "phone": "+1 (961) 593-3404"
      },
      {
        "_id": "54332b756ecc6c18a8506251",
        "age": 39,
        "name": "Mays Montoya",
        "gender": "male",
        "company": "COMBOGEN",
        "email": "maysmontoya@combogen.com",
        "phone": "+1 (991) 575-2603"
      },
      {
        "_id": "54332b754b95a7276b82a0c0",
        "age": 27,
        "name": "Amber Stark",
        "gender": "female",
        "company": "COWTOWN",
        "email": "amberstark@cowtown.com",
        "phone": "+1 (827) 466-3852"
      },
      {
        "_id": "54332b751c5127ee27f4d74d",
        "age": 26,
        "name": "Kathrine Stone",
        "gender": "female",
        "company": "KEENGEN",
        "email": "kathrinestone@keengen.com",
        "phone": "+1 (988) 550-2410"
      },
      {
        "_id": "54332b755b6706d227a9ba34",
        "age": 27,
        "name": "Joyner Morgan",
        "gender": "male",
        "company": "BARKARAMA",
        "email": "joynermorgan@barkarama.com",
        "phone": "+1 (966) 599-3539"
      },
      {
        "_id": "54332b756c152d6911ddd6e6",
        "age": 30,
        "name": "English Adkins",
        "gender": "male",
        "company": "DEEPENDS",
        "email": "englishadkins@deepends.com",
        "phone": "+1 (819) 464-3053"
      }
    ];
    return data;
})

.controller('MyCtrl', function($scope, FooData) {
    $scope.data = FooData; 
});