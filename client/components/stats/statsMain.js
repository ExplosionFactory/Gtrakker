angular.module('gtrak')
  .component('stats', {
    bindings: {
      gdata: '<',
    },
    templateUrl: 'templates/stats/statsMain.html',
  }).controller('stat', () => {

  });
