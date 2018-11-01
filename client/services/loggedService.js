angular.module('gtrak')
  .service('loggedService', ($http) => {
    this.createSession = (req, res) => {
      console.log('loggedService');
      $http.get('/session', (req, res) => {
        console.log(res.session);
      });
    };
  });
