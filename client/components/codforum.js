angular.module('gtrak')
  .component('codForum', {
    bindings: {
    },
    templateUrl: 'templates/codforum.html',
  }).controller('codForumCtrl', function ($scope,$location) {
    this.game = "cod";
    // $scope.submit = () =>{

    // }
    $scope.back = () => {
      $location.path('/app');
    };
  });