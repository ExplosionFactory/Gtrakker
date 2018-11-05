/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
angular.module('gtrak')
    bindings: {
      search: '<',
    },
    templateUrl: 'templates/navbar.html',
<<<<<<< HEAD
  }).controller('navCtrl',($scope, $http, $location) => {
=======
  }).controller('navCtrl', function navCtrl($scope, $http, $location) {
>>>>>>> 95ef16d426b30168e22d951c432dc6315843b716
    $scope.imageAddress = '../../images/gtrakker_logo.png';
    $scope.myValue = false;
    $scope.account = () => {
      $location.path('/account');
    };
    $scope.logout = () => {
      $http.post('/end').then((data) => {
        $location.path('/splash');
      });
    };
    $scope.forum = () => {
      $location.path('/forum');
    };
  });
