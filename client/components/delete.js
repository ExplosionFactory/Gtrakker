/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
angular.module('gtrak')
  .component('delete', {
    bindings: {
    },
    templateUrl: 'templates/delete.html',
  }).controller('deleteCtrl', function ($http, $location, $scope) {
    $scope.back = () => {
      $location.path('/app');
    };

    $scope.delete = () => {
      console.log('delete');
      $http.get('/delete').then(() => {
        $location.path('/splash');
      });
    };
  });
