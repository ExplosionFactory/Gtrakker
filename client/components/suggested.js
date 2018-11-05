// eslint-disable-next-line no-undef
angular.module('gtrak')
  .component('suggested', {
    bindings: {
      data: '<',
    },
    templateUrl: 'templates/suggested.html',
  }).controller('suggestedCtrl', ($scope) => {
    $scope.trivioke = '../../images/trivioke.png';
  });
