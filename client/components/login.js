angular.module('gtrak')
  .component('login', {
    bindings: {},
    templateUrl: 'templates/login.html',
  }).controller('loginCtrl', ($http, $scope) => {
    $scope.submit = () => {
      $http({
        method: 'POST',
        url: '/login',
        data: {
          loginName: $scope.loginUser,
          loginPassword: $scope.loginPassword,
        },
      });
    };
  });
