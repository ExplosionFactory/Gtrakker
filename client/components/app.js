/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable func-names */
// eslint-disable-next-line no-undef
angular.module('gtrak')
  .component('app', {
    templateUrl: 'templates/app.html',
  }).controller('appCtrl', function ($http, $location) {
    this.userData = {};
    this.gdata = {};
    const controller = this;
    $http.get('/loggedin').then((data) => {
      if (data.data === '') {
        $location.path('/splash');
      } else {
        $http.get('/appUser').then((data) => {
          this.userData = data.data;
        }).then(() => {
          if (controller.userData.fortnite.username !== null && controller.userData.fortnite.platform !== null) {
            $http.post('/fort', controller.userData.fortnite).then((fortniteData) => {
              controller.gdata.fortnite = fortniteData.data;
            });
          }
          if (controller.userData.cod.username !== null && controller.userData.cod.platform !== null) {
            $http.post('/cod', controller.userData.cod).then((codData) => {
              controller.gdata.cod = codData.data.data.stats;
            });
          }
          if (controller.userData.battlefield.username !== null && controller.userData.battlefield.platform !== null) {
            $http.post('/bf4', controller.userData.battlefield).then((battleData) => {
              controller.gdata.battle = battleData.data;
            });
          }
          if (controller.userData.overwatch.username !== null) {
            $http.post('/over', controller.userData.overwatch).then((overwatchData) => {
              controller.gdata.overwatch = overwatchData.data;
            });
          }
          $http.post('/news').then((newsData) => {
            controller.gdata.news = newsData.data;
          });
          $http.post('/twitch').then((twitchData) => {
            controller.gdata.twitch = twitchData.data.clips;
          });
          $http.post('/suggested').then((suggestedData) => {
            controller.gdata.suggested = suggestedData.data;
          });
        });
      }
    });

    this.search = (user) => {
      $http.post('/appUser', { username: user }).then((data) => {
        this.userData = data.data;
      }).then(() => {
        if (controller.userData.fortnite.username !== null && controller.userData.fortnite.platform !== null) {
          controller.gdata.fortnite = null;
          $http.post('/fort', controller.userData.fortnite).then((fortniteData) => {
            controller.gdata.fortnite = fortniteData.data;
          });
        } else {
          controller.gdata.fortnite = null;
        }
        if (controller.userData.cod.username !== null && controller.userData.cod.platform !== null) {
          controller.gdata.cod = null;
          $http.post('/cod', controller.userData.cod).then((codData) => {
            controller.gdata.cod = codData.data.data.stats;
          });
        } else {
          controller.gdata.cod = null;
        }
        if (controller.userData.battlefield.username !== null && controller.userData.battlefield.platform !== null) {
          controller.gdata.battle = null;
          $http.post('/bf4', controller.userData.battlefield).then((battleData) => {
            controller.gdata.battle = battleData.data;
          });
        } else {
          controller.gdata.battle = null;
        }
        if (controller.userData.overwatch.username !== null) {
          controller.gdata.overwatch = null;
          $http.post('/over', controller.userData.overwatch).then((overwatchData) => {
            controller.gdata.overwatch = overwatchData.data;
          });
        } else {
          controller.gdata.overwatch = null;
        }
        $http.post('/news').then((newsData) => {
          controller.gdata.news = newsData.data;
        });
        $http.post('/twitch').then((twitchData) => {
          controller.gdata.twitch = twitchData.data.clips;
        });
        $http.post('/suggested').then((suggestedData) => {
          controller.gdata.suggested = suggestedData.data;
        });
      });
    };
    console.log(this.gdata);
  });
