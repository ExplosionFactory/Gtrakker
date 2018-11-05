/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
angular.module('gtrak')
  .component('forum', {
    bindings: {
    },
    templateUrl: 'templates/forum.html',
  }).controller('forumCtrl', function ($scope, $location, $http, $window) {
    $scope.imageAddress = '../../images/gtrakker_logo.png';
    $scope.bgAddress = '../../images/chatbg.png';
    $http.get('/loggedin').then((data) => {
      if (data.data === '') {
        $location.path('/splash');
      }
    });
    $scope.data = {};
    $http.get('/forum').then((messages) => {
      $scope.data.messages = messages.data;
    });
    $scope.submit = () => {
      $http.post('/forum', { mess: $scope.message }).then(() => {
        $http.get('/forum').then((messages) => {
          console.log(messages);
          $scope.data.messages = messages.data;
          $window.location.reload();
        });
      });
    };
    $scope.back = () => {
      $location.path('/app');
    };
    console.log($scope.data);
  });
