angular.module('gtrak')
  .component('app', {
    bindings: {},
    templateUrl: 'templates/app.html',
  }).controller('MainCtrl', function ($http) {
    $http.get('/appUser').then((data) =>{
      console.log(data);
    });

  });
