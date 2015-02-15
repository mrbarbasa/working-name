'use strict';

/**
 * @ngdoc service
 * @name airshipAdminApp.globalHelpers
 * @description [Reusable functions and variables that can be injected into controllers for use]
 * # globalHelpers
 * Service in the airshipAdminApp.
 */
angular.module('ionicApp.services',[])
  .service('DataRetrieval', function () {

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
  loc: 'torso',
  img : '../img/nodeshirt.jpg'
},{
  type : 'Casual',
  color : 'White',
  length : 'Short',
  item : 'Designer Shirt',
  loc: 'torso',
  img : '../img/designer.jpeg'
},{
    type : 'Casual',
  color : 'Black',
  length : 'Short',
  item : 'Billabong Shirt',
  loc: 'torso',
  img : '../img/billabong.jpeg'
},{
  // 0
   type : 'Casual',
  color : 'Beige',
  length : 'Short',
  item : 'Cargo Shorts',
  loc : 'legs',
  img : '../img/casual-pants.jpg'
}, {
  // 1
  type : 'Casual',
  color : 'Black',
  length : 'Long',
  item : 'Ironic T-shirt',
  loc : 'legs',
  img :'../img/casual-sweats.jpg'  
}, {
  // 2
  type : 'Casual',
  color: 'Grey',
  length: 'Long',
  item : 'Sweatpants',
  loc : 'legs',
  img :'../img/casual-greysweat.jpg'
}, {
  // 3
  type : 'Casual',
  color : 'White',
  length : null,
  item : 'Sneakers',
  loc : 'feet',
  img : '../img/casual-whiteshoes.jpg'
}, {
  // 4
  type : 'Casual',
  color : 'Black',
  length : 'Short',
  item : 'Jeans',
  loc : 'legs',
  img : '../img/casual-blackshort.jpg'
}, {
  // 5
  type : 'Casual',
  color : 'Black',
  length : null,
  item : 'Slippers',
  loc : 'feet',
  img :'../img/casual-slipper.jpg'
}, {
  type : 'Business',
  color : 'Grey',
  length : 'Long',
  item : 'Slacks',
  loc : 'legs',
  img :'../img/business-greyslack.jpg'
},{
  // 6
   type : 'Business', 
  color : 'Blue',
  length : 'Long',
  item : 'Dress-Shirt',
  loc : 'torso',
  img : '../img/business-bluedressshirt.jpg'
}, {
  // 7
  type : 'Business',
  color: 'Black',
  length : 'Long',
  item : 'Slacks',
  loc : 'legs',
  img : '../img/business-blackslack.jpg'
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
  loc : 'feet',
  img : '../img/business-brownshoe.jpg'
},{
  // 9
  type : 'Business',
  color: 'Black',
  length : null,
  item : 'Dress-Shoes',
  loc : 'feet',
  img : '../img/business-blackshoe.jpg'
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
  this.userChoice = {
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

  /**
   * choose
   * [function that randomly chooses an outfit]
   * @param  {object} userChoice [description]
   */
  this.choose = function(userChoice){
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
    // console.log(newOpt);
    var answerObj ={};
    function finalAnswer(answerObj){

      answerObj = {
        // check if answerObj.torso = false; then push if not don't
        torso : torso, 
        legs : legs,
        feet : feet 
      };
      console.log(answerObj);
      return answerObj;
    }
    return finalAnswer(answerObj);
  }

  });
