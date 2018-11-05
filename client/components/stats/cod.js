angular.module('gtrak')
  .component('cod', {
    bindings: {
      data: '<',
    },
    controller: ($scope) => {
      $scope.myValue = false;
      $scope.submit = () => {
        $scope.myValue = !$scope.myValue;
      };
      $scope.imgAddress = '../../images/blops.png';
    },
    templateUrl: 'templates/stats/cod.html',
  });
