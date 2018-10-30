angular.module('gtrak')
  .service('overwatchService', ($http) => {
    this.getter = (plat, name, callback) => {
      $http.post('/over', {
        platform: plat,
        userName: name,
      }).then((results) => {
        callback(results)
      }).catch((err) => {
        callback(err)
      });
    };
  });