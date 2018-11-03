angular.module('gtrak')
  .component('stats', {
    bindings: {
      gdata: '<',
      message: '<',
    },
    templateUrl: 'templates/stats/statsMain.html',
  }).controller('stat', () => {

  });
