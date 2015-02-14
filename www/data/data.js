var foodopt = [{
  cuisine : 'Mexican',
  location : 'Kakaako',
  name : 'Cocina',
  cost : '$$'
}, {
  cuisine : 'Japanese',
  location : 'Ward',
  name : 'Nanzan GiroGiro',
  cost : '$$$'
}, {
   cuisine : 'Dimsum',
  location : 'Chinatown',
  name : 'Mei Sum',
  cost : '$'
}, {
  cuisine : 'Korean',
  location : 'Kalihi',
  name : 'HanYang',
  cost : '$'
}, {
  cuisine : 'Thai',
  location : 'Liliha',
  name : 'Thai Cafe',
  cost : '$'
}, {
  cuisine : 'Burgers', 
  location : 'Kakaako',
  name : 'Kua"aina burger',
  cost : '$$'
}];


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
  loc: torso
},{
  // 0
   type : 'Casual',
  color : ' Beige',
  length : 'Short',
  item : 'Cargo Shorts',
  loc : legs
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


// var neck_items = [clothopt[11],clothopt[8]];
// var tops = [clothopt[1], clothopt[6],clothopt[10]];
// var legs = [clothopt[0],clothopt[2],clothopt[4],clothopt[7],clothopt[11]];
// var feet = [clothopt[3],clothopt[5],clothopt[9],clothopt[12]];
// console.log(tops);
// var userchoice;
// var casual;
// var business;
// var hotdate;
// var clong;
// var cshort;
// if (userchoice == casual ){
//   if (userchoice == clong){
//     return tops[];
//   }
// }

var casual_items = [];
for (var i = 0; i <= 6; i++){
  casual_items.push(clothopt[i].color + ' ' +  clothopt[i].item);
}

var shortCasual = [];
shortCasual.push(casual_items[0],casual_items[1],casual_items[2],casual_items[6]);

var longCasual = [];
longCasual.push(casual_items[0], casual_items[1],casual_items[2],casual_items[3],casual_items[4],casual_items[5]);

var business_items = [];
  for (var i = 7; i <=12; i++){
    business_items.push(clothopt[i].color + ' ' + clothopt[i].item);
  }
  console.log(business_items);


var longBusiness = [];



var hot_date = [];
  for (var i = 13; i <= 16; i++){
    hot_date.push(clothopt[i].color + ' ' + clothopt[i].item);
  }

// var casualCloth = 'Casual'
// if (userChoice == casualCloth){
//   if (userChoice == 'Long'){

//   }
// }
