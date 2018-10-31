angular.module('gtrak')
  .component('signUp', {
    bindings: {},
    templateUrl: 'signup.html',
  }).controller('signUpCtrl', ($http, $scope) => {
    // $scope.submit = () => {
      $http({
        method: 'POST',
        url: '/signup',
        data: {
          name: 'test',
          pass: 'test pass',
        },
      });
    // };
  });
