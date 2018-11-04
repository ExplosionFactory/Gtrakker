/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
// eslint-disable-next-line no-undef
angular.module('gtrak')
  .component('navbar', {
    bindings: {},
    templateUrl: 'templates/navbar.html',
  }).controller('navCtrl', function ($scope, $http, $location) {
    $scope.imageAddress = '../../images/gtrakker_logo.png';
    $scope.myValue = false;
    $scope.delete = () => {
      $http({
        method: 'POST',
        url: '/delete',
        data: {},
      });
    };
    $scope.search = () => {
      console.log($scope.searchUser);
    };
    $scope.logout = () => {
      $http.post('/end').then((data) => {
        $location.path('/splash');
      });
    };
  });
