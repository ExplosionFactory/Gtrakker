angular.module('gtrak')
  .component('overwatch', {
    bindings: {
      data: '<',
    },
    controller: ($scope) => {
      $scope.imgAddress = '../../images/overwatch.png';
    },
    templateUrl: 'templates/stats/overwatch.html',
  });
