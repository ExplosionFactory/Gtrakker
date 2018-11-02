/* eslint-disable func-names */
// eslint-disable-next-line no-undef
angular.module('gtrak')
  .service('battleService', function ($http) {
    this.getter = (plat, name, callback) => {
      $http.post('/battle', {
        platform: plat,
        userName: name,
      }).then((results) => {
        callback(results);
      }).catch((err) => {
        callback(err);
      });
    };
  });
