/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
// eslint-disable-next-line no-undef
angular.module('gtrak')
  .component('signUp', {
    bindings: {},
    templateUrl: 'templates/signup.html',
  }).controller('signUpCtrl', function ($scope, $http, $location) {
    $scope.imageAddress = '../../images/gtrakker_logo.png';
    $scope.myValue = false;
    $scope.back = () => {
      $location.path('/login');
    };
    $scope.submit = () => {
      $http({
        method: 'POST',
        url: '/signup',
        data: {
          loginName: $scope.loginName,
          loginPass: $scope.loginPass,
          usernames: {
            battleUser: $scope.battleUser || null,
            codUser: $scope.codUser || null,
            fortUser: $scope.fortUser || null,
            overUser: $scope.overUser || null,
          },
          platforms: {
            battlePlat: $scope.battlePlat || null,
            codPlat: $scope.codPlat || null,
            fortPlat: $scope.fortPlat || null,
            overPlat: $scope.overPlat || null,
          },
        },
      }).then((data) => {
        if (data.data === 'true') {
          $scope.myValue = true;
        } else {
          $location.path('/login');
        }
      });
    };
  });
