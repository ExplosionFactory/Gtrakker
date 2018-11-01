angular.module('gtrak')
  .component('signUp', {
    bindings: {},
    templateUrl: 'signup.html',
  }).controller('signUpCtrl', () => {
    $http({
      method: 'POST',
      url: '/signup',
      data: {
        name: 'test',
        pass: 'test pass',
      },
    });
  });
