/* eslint-disable no-console */
/* eslint-disable func-names */
// eslint-disable-next-line no-undef
angular.module('gtrak')
  .component('app', {
    bindings: {},
    templateUrl: 'templates/app.html',
  }).controller('MainCtrl', function ($http) {
    $http.get('/appUser').then((data) =>{
      console.log(data);
    });

  });
