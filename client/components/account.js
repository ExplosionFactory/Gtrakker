/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable no-undef */
angular.module('gtrak')
  .component('account', {
    bindings: {
    },
    templateUrl: 'templates/settings.html',
  }).controller('accountCtrl', function ($http, $location, $scope) {
    $scope.delete = () => {
      $location.path('/delete');
    };
    $scope.submit = () => {
      $http.post("/update", {game: $scope.updateGame, user: $scope.updateName, platform: $scope.updatePlat });
      console.log('game', $scope.updateGame, 'user', $scope.updateName, 'plat', $scope.updatePlat);
    };
  });
