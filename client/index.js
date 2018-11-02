/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
const app = angular.module('gtrak', ['ngRoute']).config(function ($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl',
  }).when('/signUp', {
    templateUrl: 'templates/signup.html',
    controller: 'signUpCtrl',
  }).otherwise({
    redirectTo: '/',
    templateUrl: 'templates/splash.html',
    controller: 'splashCtrl',
  });
});
