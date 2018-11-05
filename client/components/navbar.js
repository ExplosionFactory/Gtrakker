/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
// eslint-disable-next-line no-undef
angular.module('gtrak')
  .component('navbar', {
    bindings: {
      search: '<',
    },
    templateUrl: 'templates/navbar.html',
  }).controller('navCtrl', function ($scope, $http, $location) {
    $scope.imageAddress = '../../images/gtrakker_logo.png';
    $scope.myValue = false;
    $scope.account = () => {
      $location.path('/account');
    };
    $scope.logout = () => {
      $http.post('/end').then((data) => {
        $location.path('/splash');
      });  
    };
    $scope.cod = () => {
      $location.path('/cod');
    };
  });
