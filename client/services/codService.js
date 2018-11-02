// eslint-disable-next-line no-undef
angular.module('gtrak')
  .service('codService', ($http) => {
    this.getter = (plat, name, callback) => {
      $http.post('/cod', {
        platform: plat,
        userName: name,
      }).then((results) => {
        callback(results);
      }).catch((err) => {
        callback(err);
      });
    };
  });
