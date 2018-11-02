angular.module('gtrak')
  .component('signUp', {
    bindings: {},
    templateUrl: 'templates/signup.html',
  }).controller('signUpCtrl',function ($scope, $http, $location){
    $scope.submit = () => {
      $http({
        method: 'POST',
        url: '/signup',
        data: {
          loginName: $scope.loginName,
          loginPass: $scope.loginPass,
          usernames: {
            battleUser: $scope.battleUser,
            codUser: $scope.codUser,
            fortUser: $scope.fortUser,
            overUser: $scope.overUser,
          },
          platforms: {
            battlePlat: $scope.battlePlat,
            codPlat: $scope.codPlat,
            fortPlat: $scope.fortPlat,
            overPlat: $scope.overPlat,
          },
        },
      });
      $location.path('/login');
    };
  });
