angular.module('gtrak')
  .service('codService', ($http) => {
    this.getter = (platform, name, callback) => {
      $http.post('/cod', {
        plat: platform,
        user: name,
      }).then((results) => {
        callback(results)
      }).catch((err) => {
        callback(err)
      });
    };
  });