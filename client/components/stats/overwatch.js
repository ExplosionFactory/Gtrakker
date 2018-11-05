angular.module('gtrak')
  .component('overwatch', {
    bindings: {
      data: '<',
    },
    controller: ($scope) => {
      $scope.myValue = false;
      $scope.submit = () => {
        $scope.myValue = !$scope.myValue;
      };
      $scope.imgAddress = '../../images/overwatch.png';
    },
    templateUrl: 'templates/stats/overwatch.html',
  });
