angular.module('gtrak')
  .component('fort', {
    bindings: {
      data: '<',
    },
    controller: ($scope) => {
      $scope.imgAddress = '../../images/fortnite.png';
    },
    templateUrl: 'templates/stats/fort.html',
  });
