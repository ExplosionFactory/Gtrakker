/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable no-undef */
angular.module('gtrak')
  .component('login', {
    bindings: {},
    templateUrl: 'templates/login.html',
  }).controller('loginCtrl', function ($http, $scope, $location) {
    $scope.submit = () => {
      $http({
        method: 'POST',
        url: '/login',
        data: {
          loginName: $scope.loginUser,
          loginPassword: $scope.loginPassword,
        },
      }).then((response) => {
        if (response.data === 'true') {
          $location.path('/app');
        } else {
          $location.path('/signUp');
        }
      });
    };
  });
