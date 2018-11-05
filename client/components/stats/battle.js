/* eslint-disable object-shorthand */
/* eslint-disable func-names */
angular.module('gtrak')
  .component('battle', {
    bindings: {
      data: '<',
    },
    controller: function ($scope) {
      $scope.myValue = false;
      $scope.submit = () => {
        $scope.myValue = !$scope.myValue;
      };
      $scope.imgAddress = '../../images/battlefield.png';
    },
    templateUrl: 'templates/stats/battle.html',
  });
