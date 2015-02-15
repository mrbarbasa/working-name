angular.module('ionicApp.controllers', [])

.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate, DataRetrieval) {

  $scope.data = DataRetrieval;

  $scope.slides = [
    {
      'template' : 'wear-occasionSlide.html',
      'viewable' : true
    },
    {
      'template' : 'rouletteSlide.html',
      'viewable' : false
    },
  ];

  $scope.clothing_type = null;

  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  $scope.startOver = function () {
    $ionicSlideBoxDelegate.slide(1);
  }

  $scope.roulette = function () {
    var interval = [];
    var timeInterval = [];
    for (var i = 0; i < 3; i++) {
      interval.push($scope.getRandomInterval());
      timeInterval.push($scope.getRandomTimeInterval());
    };
    while(interval[0]-- > 0){
      setTimeout(function () {
        $ionicSlideBoxDelegate.$getByHandle('top-box').next(); 
      }, timeInterval[0]*interval[0]);
    }
    while(interval[1]-- > 0){
      setTimeout(function () {
        $ionicSlideBoxDelegate.$getByHandle('bottom-box').next(); 
      }, timeInterval[1]*interval[1]);
    }
    while(interval[2]-- > 0){
      setTimeout(function () {
        $ionicSlideBoxDelegate.$getByHandle('footwear-box').next(); 
      }, timeInterval[2]*interval[2]);
    }

  }

  $scope.getRandomInterval = function () {
    return Math.floor(Math.random()*15)+5;
  }

  $scope.getRandomTimeInterval = function () {
    return Math.floor(Math.random()*100)+50;
  }



});
