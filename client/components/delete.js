angular.module('gtrak')
  .component('delete', {
    bindings: {
    },
    templateUrl: 'templates/delete.html',
  }).controller('deleteCtrl', function ($http, $location, $scope){
    $scope.delete = () => {
    console.log("delete")
    $http.get('/delete').then(() => {
      $location.path('/splash');
    });
    };
    });
