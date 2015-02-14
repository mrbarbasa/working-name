exports.datas = choose;

// var foodopt = [{
//   cuisine : 'Mexican',
//   location : 'Kakaako',
//   name : 'Cocina',
//   cost : '$$'
// }, {
//   cuisine : 'Japanese',
//   location : 'Ward',
//   name : 'Nanzan GiroGiro',
//   cost : '$$$'
// }, {
//    cuisine : 'Dimsum',
//   location : 'Chinatown',
//   name : 'Mei Sum',
//   cost : '$'
// }, {
//   cuisine : 'Korean',
//   location : 'Kalihi',
//   name : 'HanYang',
//   cost : '$'
// }, {
//   cuisine : 'Thai',
//   location : 'Liliha',
//   name : 'Thai Cafe',
//   cost : '$'
// }, {
//   cuisine : 'Burgers', 
//   location : 'Kakaako',
//   name : 'Kua"aina burger',
//   cost : '$$'
// }];

var colors = ['black', 'gray', 'white'];

var casual; 
var torso;
var feet;
var legs;
var neck;
var clothopt = [{
  type : 'Casual',
  color : 'White',
  length : 'Short',
  item : 'Node.js Shirt',
  loc: 'torso'
},{
  // 0
   type : 'Casual',
  color : 'Beige',
  length : 'Short',
  item : 'Cargo Shorts',
  loc : 'legs'
}, {
  // 1
  type : 'Casual',
  color : 'Black',
  length : 'Long',
  item : 'Ironic T-shirt',
  loc : 'torso'  
}, {
  // 2
  type : 'Casual',
  color: 'Grey',
  length: 'Long',
  item : 'Sweatpants',
  loc : 'legs'
}, {
  // 3
  type : 'Casual',
  color : 'White',
  length : null,
  item : 'Sneakers',
  loc : 'feet'
}, {
  // 4
  type : 'Casual',
  color : 'Black',
  length : 'Short',
  item : 'Jeans',
  loc : 'legs'
}, {
  // 5
  type : 'Casual',
  color : 'Black',
  length : null,
  item : 'Slippers',
  loc : 'feet'
}, {
  type : 'Business',
  color : 'Grey',
  length : 'Long',
  item : 'Slacks',
  loc : 'legs'
},{
  // 6
   type : 'Business', 
  color : 'Blue',
  length : 'Long',
  item : 'Dress-Shirt',
  loc : 'torso'
}, {
  // 7
  type : 'Business',
  color: 'Black',
  length : 'Long',
  item : 'Slacks',
  loc : 'legs'
}, {
  // 8
  type : 'Business',
  color : 'Black',
  length : null,
  item : 'Tie',
  accessory : 'Fancy NeckTie',
  loc : 'neck'
},{
  type : 'Business',
  color : 'Brown',
  length : null,
  item : 'Dress-Shoes',
  loc : 'feet'
},{
  // 9
  type : 'Business',
  color: 'Black',
  length : null,
  item : 'Dress-Shoes',
  loc : 'feet' 
}, {
  // 10
  type : 'Hot Date',
  color: 'Pink',
  length : 'Long',
  item : 'Dress-Shirt',
  loc : 'torso'
}, {
  // 11
   type : 'Hot Date',
  color : 'Black',
  length : 'Long',
  item : 'Slacks',
  loc : 'legs'
}, { 
  // 12
  id :10,
  type : 'Hot Date',
  color : 'Black',
  length : null,
  item : 'Dress-Shoes',
  loc : 'feet'
}, {
  // 13
  id: 11,
  type : 'Hot Date',
  color : 'White',
  length : null,
  item : 'Tie',
  accessory : 'Fancy NeckTie',
  loc : 'neck'
}];


// Narrows down the selection
var userChoice = {
  type : null,
  length : null,
  acessory : null
};


// Filter through everything to return casual


// Filter through Casual to return Short items.
var bodyParts = {
  head : false,
  torso : false,
  feet : false
};

// xported function
function choose(userChoice){
 // filter function 1
  function getAnswer(e){
    if (userChoice.type == e.type){
      return e;
    }else{
      return false;
    }
  }
  var newOpt = clothopt.filter(getAnswer);
  // pull each loc of item and store it to respective array
  var torso = [];
  var legs = [];
  var feet = [];
  // must return bool on filter
  function getLoc(e){
    if (e.loc == 'torso'){
      torso.push(e);
      return true;
    }
    if (e.loc == 'legs'){
      legs.push(e);
      return true;
    }
    if (e.loc == 'feet'){
      feet.push(e);
      return true;
    }
    return;
  }
  newOpt = newOpt.filter(getLoc);
  console.log(newOpt);
  var answerObj ={};
  function finalAnswer(answerObj){
    var torsoNum = Math.floor(Math.random()*torso.length);
    var legsNum = Math.floor(Math.random()*legs.length);
    var feetNum = Math.floor(Math.random()*feet.length);

    answerObj = {
      // check if answerObj.torso = false; then push if not don't
      torso : torso[torsoNum], 
      legs : legs[legsNum],
      feet : feet[feetNum] 
    };
    return answerObj;
  }
  return finalAnswer(answerObj);
}



// check if userChoice type = (selection)
// array method filter on clothopt
// return all the matching items from filter
// var casualCloth = 'Casual'
// if (userChoice.type == casualCloth){
//   if (userChoice.length == 'Long'){

//   }
// }
