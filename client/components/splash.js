/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
// eslint-disable-next-line no-undef
angular.module('gtrak')
  .component('splash', {
    bindings: {},
    templateUrl: 'templates/splash.html',
  }).controller('splashCtrl', function ($scope, $location) {
    $scope.logsubmit = () => {
      $location.path('/login');
    };
    $scope.signsubmit = () => {
      $location.path('/signUp');
    };
  });
