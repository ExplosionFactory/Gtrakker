angular.module('gtrak')
  .component('app', {
    bindings: {},
    templateUrl: 'templates/app.html',
  }).controller('MainCtrl', () => {
    this.log = function(){
      console.log("hello")
    }
    this.log();
  });
