/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
angular.module('gtrak')
  .component('forum', {
    bindings: {
    },
    templateUrl: 'templates/codforum.html',
  }).controller('forumCtrl', function ($scope, $location) {
    $scope.submit = () => {
      console.log($scope.message);
    };
    $scope.back = () => {
      $location.path('/app');
    };
  });
