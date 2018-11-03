/* eslint-disable no-console */
/* eslint-disable func-names */
// eslint-disable-next-line no-undef
angular.module('gtrak')
  .component('app', {
    templateUrl: 'templates/app.html',
  }).controller('appCtrl', function ($http) {
    this.userData = {};
    this.gdata = {
      1: 'fuuuuuuuck',
    };
    this.message = 'hi';
    const controller = this;
    $http.get('/appUser').then((data) => {
      this.userData = data.data;
    }).then(() => {
      $http.post('/fort', controller.userData.fortnite).then((fortniteData) => {
        console.log(fortniteData);
        controller.gdata.fortnite = fortniteData.data;
      });
    });
  });
  
  //   controller.cod = data.cod;
  //   controller.fortnite = data.data.fortnite;
  //   controller.overwatch = data.overwatch;
  //   return Promise.all([bf, cod, c, d])
  // }).then(([bfData,codData,fortData,overData]))