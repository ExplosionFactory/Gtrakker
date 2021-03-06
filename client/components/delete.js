/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
angular.module('gtrak')
  .component('delete', {
    bindings: {
    },
    templateUrl: 'templates/delete.html',
  }).controller('deleteCtrl', function ($http, $location, $scope) {
    $scope.imageAddress = '../../images/sad.png';
    $scope.back = () => {
      $location.path('/account');
    };

    $http.get('/loggedin').then((data) => {
      if (data.data === '') {
        $location.path('/splash');
      }
    });
    $scope.delete = () => {
      // console.log('delete');
      $http.post('/delete', { password: $scope.loginPassword }).then(() => {
        $location.path('/splash');
      });
    };
  });
