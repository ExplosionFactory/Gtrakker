/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
angular.module('gtrak')
  .component('navbar', {
    bindings: {},
    templateUrl: 'templates/navbar.html',
  }).controller('navCtrl', function ($scope, $location) {
    $scope.logout = () => {
      console.log('here');
      $location.path('/splash');
    };
  });
