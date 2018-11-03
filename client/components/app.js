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
    $http.get('/appUser').then((data) => {
      console.log(data);
      this.userData = data.data;
    }).then(() => {
      $http.post('/fort', controller.userData.fortnite).then((fortniteData) => {
        console.log(fortniteData);
        controller.gdata.fortnite = fortniteData.data;
      });
      $http.post('/cod', controller.userData.cod).then((codData) => {
        controller.gdata.cod = codData.data.data.stats;
      });
      $http.post('/bf4', controller.userData.battlefield).then((battleData) => {
        controller.gdata.battle = battleData.data;
      });
      $http.post('/over', controller.userData.overwatch).then((overwatchData) => { 
        console.log(overwatchData);
        controller.gdata.overwatch = overwatchData.data;
      });
      $http.post('/news').then((newsData) => { 
        // console.log(newsData);
        // controller.gdata.news = newsData.data;
      });
    });
    console.log(this.gdata);
  });
