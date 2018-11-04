/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable no-undef */
angular.module('gtrak')
  .component('account', {
    bindings: {
    },
    templateUrl: 'templates/settings.html',
  }).controller('accountCtrl', function ($http, $location, $scope) {
    $scope.submit = () => {
      console.log('game', $scope.updateGame, 'user', $scope.updateName, 'plat', $scope.updatePlat);
    };
    $scope.back = () => {
      $location.path('/app');
    };
  });
