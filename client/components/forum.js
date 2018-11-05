/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
angular.module('gtrak')
  .component('forum', {
    bindings: {
    },
    templateUrl: 'templates/codforum.html',
  }).controller('forumCtrl', function ($scope, $location, $http) {
    $http.get('/forum').then((messages) => {
      this.data = messages.data;
    });
    $scope.submit = () => {
      $http.post('/forum',{mess:$scope.message}).then(() =>{
        $http.get('/forum').then((messages) => {
          this.data = messages.data;
        });
      });
    };
    $scope.back = () => {
      $location.path('/app');
    };
  });
