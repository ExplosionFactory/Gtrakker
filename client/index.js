const app = angular.module('gtrak', ['ngRoute']).config(function ($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl',
  }).when('/signUp', {
    templateUrl: 'templates/signup.html',
    controller: 'signUpCtrl',
  }).when('/app',{
    templateUrl: 'templates/app.html',
    controller: 'MainCtrl',
    
  }).otherwise({
    redirectTo: '/',
    templateUrl: 'templates/signup.html',
    controller: 'signUpCtrl',
  });
});
