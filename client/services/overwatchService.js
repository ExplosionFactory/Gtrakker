angular.module('gtrak')
  .service('overwatchService', ($http) => {
    this.getter = (platform, name, callback) => {
      $http.post('/over', {
        plat: platform,
        user: name,
      }).then((results) => {
        callback(results)
      }).catch((err) => {
        callback(err)
      });
    };
  });