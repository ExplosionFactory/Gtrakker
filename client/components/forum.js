/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
angular.module('gtrak')
  .component('forum', {
    bindings: {
    },
    templateUrl: 'templates/forum.html',
  }).controller('forumCtrl', function ($scope, $location, $http) {
    $scope.data = {};
    $http.get('/forum').then((messages) => {
      $scope.data.messages = messages.data;
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
    console.log($scope.data);
  });
