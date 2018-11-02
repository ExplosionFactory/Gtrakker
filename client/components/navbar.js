/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
// eslint-disable-next-line no-undef
angular.module('gtrak')
  .component('navbar', {
    bindings: {},
    templateUrl: 'templates/navbar.html',
  }).controller('navCtrl', function ($scope, $location) {
    $scope.imageAddress = '../../images/gtrakker_logo.png';
    $scope.logout = () => {
      // need to destroy session here
      // req.session.destroy(); or req.session = null;
      $location.path('/splash');
    };
  });
