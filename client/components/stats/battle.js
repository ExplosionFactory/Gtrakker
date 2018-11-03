angular.module('gtrak')
  .component('battle', {
    bindings: {
      data: '<',
    },
    controller: ($scope) => {
      $scope.imgAddress = '../../images/battlefield.png';
    },
    templateUrl: 'templates/stats/battle.html',
  });
