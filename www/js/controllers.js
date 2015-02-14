angular.module('ionicApp.controllers', [])

.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {

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


});
