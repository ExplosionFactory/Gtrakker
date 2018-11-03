angular.module('gtrak')
  .component('fort', {
    bindings: {
      data: '<',
    },
    controller: () => {
      console.log(this);
    },
    templateUrl: 'templates/stats/fort.html',
  });
