angular.module('gtrak')
  .component('login', {
    bindings: {},
    templateUrl: 'templates/login.html',
<<<<<<< HEAD
  }).controller('loginCtrl', ($http, $scope, ) => {
=======
  }).controller('loginCtrl', ($http, $scope) => {
>>>>>>> 583379f4883a95f3200dcb6727f1efa8590d7667
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
