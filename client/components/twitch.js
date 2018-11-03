/* eslint-disable arrow-body-style */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
// eslint-disable-next-line no-undef
angular.module('gtrak')
  .component('twitch', {
    bindings: {
      data: '<',
    },
    templateUrl: 'templates/twitch.html',
  }).controller('twitchCtrl', function ($scope, $sce) {
    $scope.getVideoUrl = (url) => {
      return $sce.trustAsResourceUrl(url);
    };
  });
