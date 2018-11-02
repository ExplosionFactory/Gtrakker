const app = angular.module('gtrak', ['ngRoute']).config(($routeProvider) => {
  $routeProvider.when('/login', {
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl',
  }).when('/signUp', {
    templateUrl: 'templates/signup.html',
    controller: 'signUpCtrl',
  }).otherwise({
    redirectTo: 'client/index.html',
    controller: 'MainCtrl',
  });
});