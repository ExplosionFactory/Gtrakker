// eslint-disable-next-line no-undef
angular.module('gtrak')
  .service('fortService', ($http) => {
    this.getter = (plat, name, callback) => {
      $http.post('/fort', {
        platform: plat,
        userName: name,
      }).then((results) => {
        callback(results);
      }).catch((err) => {
        callback(err);
      });
    };
  });
