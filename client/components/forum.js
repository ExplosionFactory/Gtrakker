/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
angular.module('gtrak')
  .component('forum', {
    bindings: {
    },
    templateUrl: 'templates/codforum.html',
  }).controller('forumCtrl', function ($scope, $location, $http) {
    $scope.submit = () => {
      $http.post('/forum',{mess:$scope.message}).then(() =>{
        console.log('posted')
      })
    };
    $scope.back = () => {
      $location.path('/app');
    };
  });
