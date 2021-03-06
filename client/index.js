/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
// eslint-disable-next-line no-unused-vars
const app = angular.module('gtrak', ['ngRoute']).config(function ($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl',
  }).when('/signUp', {
    templateUrl: 'templates/signup.html',
    controller: 'signUpCtrl',
  }).when('/app', {
    templateUrl: 'templates/app.html',
    controller: 'appCtrl',
    controllerAs: 'app',
  }).when('/splash', {
    templateUrl: 'templates/splash.html',
    controller: 'splashCtrl',
  })
    .when('/delete', {
      templateUrl: 'templates/delete.html',
      controller: 'deleteCtrl',
    })
    .when('/account', {
      templateUrl: 'templates/settings.html',
      controller: 'accountCtrl',
    })
    .when('/forum', {
      templateUrl: 'templates/forum.html',
      controller: 'forumCtrl',
    })
    .otherwise({
      redirectTo: '/',
      templateUrl: 'templates/splash.html',
      controller: 'splashCtrl',
    });
});
