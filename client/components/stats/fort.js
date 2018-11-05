angular.module('gtrak')
  .component('fort', {
    bindings: {
      data: '<',
    },
    controller: ($scope) => {
      $scope.myValue = false;
      $scope.submit = () => {
        $scope.myValue = !$scope.myValue;
      };
      $scope.imgAddress = '../../images/fortnite.png';
    },
    templateUrl: 'templates/stats/fort.html',
  });
