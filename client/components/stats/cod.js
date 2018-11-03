angular.module('gtrak')
  .component('cod', {
    bindings: {
      data: '<',
    },
    controller: ($scope) => {
      $scope.imgAddress = '../../images/blops.png';
    },
    templateUrl: 'templates/stats/cod.html',
  });
