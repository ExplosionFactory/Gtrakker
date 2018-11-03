// eslint-disable-next-line no-undef
angular.module('gtrak')
  .component('twitch', {
    bindings: {
      data: '<'
    },
    templateUrl: 'templates/twitch.html',
  }).controller('twitchCtrl', () => {});
