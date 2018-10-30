angular.module('gtrak')
  .service('battleService', function ($http) {
    this.getter = (platform, name, callback) => {
      $http.post('/battle', {
        plat: platform,
        user: name,
      }).then((results) => {
        callback(results)
      }).catch((err) => {
        callback(err)
      });
    };

  });