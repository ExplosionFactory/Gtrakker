/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
// eslint-disable-next-line no-undef
angular.module('gtrak')
  .component('navbar', {
    bindings: {},
    templateUrl: 'templates/navbar.html',
  }).controller('navCtrl', function ($scope, $http, $location) {
    $scope.imageAddress = '../../images/gtrakker_logo.png';
    $scope.logout = () => {
      $http.post('/end').then((data) =>{
        console.log(data);
        $location.path('/splash');
      });
    };
  });
