/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
// eslint-disable-next-line no-undef
angular.module('gtrak')
  .component('splash', {
    bindings: {},
    templateUrl: 'templates/splash.html',
  }).controller('splashCtrl', function ($scope, $location,$http) {
    $scope.imageAddress = '../../images/gtrakker_logo.png';
    $http.get('/loggedin').then((data) => {
      if (data.data !== '') {
        $location.path('/app');
      }});
    $scope.logsubmit = () => {
      $location.path('/login');
    };
    $scope.signsubmit = () => {
      $location.path('/signUp');
    };
  });
