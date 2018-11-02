/* eslint-disable no-console */
/* eslint-disable func-names */
// eslint-disable-next-line no-undef
angular.module('gtrak')
  .component('app', {
    bindings: {},
    templateUrl: 'templates/app.html',
  }).controller('MainCtrl', function () {
    this.log = function () {
      console.log('hello');
    };
    this.log();
  });
