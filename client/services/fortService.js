angular.module('gtrak')
  .service('fortService', ($http) => {
    this.getter = (platform, name, callback) => {
      $http.post('/fort', {
        plat: platform,
        user: name,
      }).then((results) => {
        callback(results)
      }).catch((err) => {
        callback(err)
      });
    };
  });