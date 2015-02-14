angular.module('ionicApp.controllers', [])

.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {

  $scope.data = {
    numViewableSlides : 0,
    slideIndex : 0, // TODO: Remove; we don't need to keep track of this ourselves
    initialInstruction : true,
    secondInstruction : false,
    slides : [
      {
        'template' : 'homeSlide.html',
        'viewable' : true
      },
      {
        'template' : 'wear-occasionSlide.html',
        'viewable' : true
      },
      {
        'template' : 'wear-colorSlide.html',
        'viewable' : true
      },
      {
        'template' : 'wear-lengthSlide.html',
        'viewable' : true
      },
      {
        'template' : 'wear-decisionSlide.html',
        'viewable' : true
      }
    ]
  };

  var countSlides = function() {
    $scope.data.numViewableSlides = 0;

    _.forEach($scope.data.slides, function(slide) {
      if(slide.viewable === true) $scope.data.numViewableSlides++;
    });

    console.log($scope.data.numViewableSlides + " viewable slides");
  };

  countSlides();

  // Called to navigate to the main app
  $scope.startApp = function() {
    $state.go('main');
  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // $scope.showBonus = function() {
  //   var index = _.findIndex($scope.data.slides, { template : 'bonusSlide.html' });
  //   $scope.data.slides[index].viewable = true;
  //   countSlides();
  //   $scope.data.initialInstruction = false
  //   $scope.data.secondInstruction = true;

  //   $ionicSlideBoxDelegate.update();
  // };

  $scope.disableSwipe = function() {
    $ionicSlideBoxDelegate.enableSlide(false);
  };

  $scope.startOver = function () {
    $ionicSlideBoxDelegate.slide(0);
  }

  // Called each time the slide changes
  $scope.slideHasChanged = function(index) { // The index that it changed to
    // console.log('SLIDE changed');
    // console.log('SLIDE index = ' + index);
    // $scope.data.slideIndex = index;
  };

  // When user swipes left, user makes the choice on the RIGHT of the screen
  $scope.onSwipeLeft = function() { // wear
    var currentIndex = $ionicSlideBoxDelegate.currentIndex();
    // console.log('RIGHT choice');
    // console.log('RIGHT index = ' + currentIndex);
    if (currentIndex === 0) {
      $ionicSlideBoxDelegate.slide(1);
    }
  };

  // advanceSlide
  // When user swipes right, user makes the choice on the LEFT of the screen
  $scope.onSwipeRight = function() {
    var currentIndex = $ionicSlideBoxDelegate.currentIndex();
    // console.log('LEFT choice');
    // console.log('LEFT index = ' + currentIndex);
    if (currentIndex === 1) { // User chose Business
      $ionicSlideBoxDelegate.slide(2);
    }
    else if (currentIndex === 2) { // User chose Black
      $ionicSlideBoxDelegate.slide(3);
    }
    else if (currentIndex === 3) { // User chose Long
      $ionicSlideBoxDelegate.slide(4);
    }
  };

  $scope.onTap = function() {
    console.log('hello');
    // console.log($ionicSlideBoxDelegate);
    // console.log($ionicSlideBoxDelegate.$getByHandle('bottom-box'));
    $ionicSlideBoxDelegate.$getByHandle('top-box').stop();
    $ionicSlideBoxDelegate.$getByHandle('bottom-box').stop();
    $ionicSlideBoxDelegate.$getByHandle('footwear-box').stop();
    // $ionicSlideBoxDelegate.$getByHandle('top-box').enableSlide(false);
    // $ionicSlideBoxDelegate.$getByHandle('bottom-box').enableSlide(false);
    // $ionicSlideBoxDelegate.$getByHandle('footwear-box').enableSlide(false);
  };

});
