/* eslint-disable no-console */
/* eslint-disable func-names */
// eslint-disable-next-line no-undef
angular.module('gtrak')
  .component('app', {
    templateUrl: 'templates/app.html',
  }).controller('appCtrl', function ($http) {
    this.userData = {};
    this.gdata = {
    };
    this.message = 'hi';
    const controller = this;
    // $http.get('/appUser').then((data) => {
    //   console.log(data);
    //   this.userData = data.data;
    // }).then(() => {
    //   $http.post('/fort', controller.userData.fortnite).then((fortniteData) => {
    //     console.log(fortniteData);
    //     controller.gdata.fortnite = fortniteData.data;
    //   });
    //   $http.post('/cod', controller.userData.cod).then((codData) => {
    //     controller.gdata.cod = codData.data.data.stats;
    //   });
    //   $http.post('/bf4', controller.userData.battlefield).then((battleData) => {
    //     controller.gdata.battle = battleData.data;
    //   });
    // });
    console.log(this.gdata);
  // });
  });

//   controller.cod = data.cod;
//   controller.fortnite = data.data.fortnite;
//   controller.overwatch = data.overwatch;
//   return Promise.all([bf, cod, c, d])
// }).then(([bfData,codData,fortData,overData]))
