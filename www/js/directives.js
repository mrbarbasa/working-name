angular.module('ionicApp.directives',[])
.directive('ionSlideRepeatDirective', [
    '$timeout',
    function ($timeout) {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          if (scope.$last) {
            $timeout(function() {
              scope.$eval(attrs.onCompleteCallback)();
            });
          }
        }
      };
    }]);