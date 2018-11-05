/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
angular.module('gtrak')
    bindings: {
      search: '<',
    },
    templateUrl: 'templates/navbar.html',
  }).controller('navCtrl', function navCtrl($scope, $http, $location) {
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
