angular.module('gtrak')
  .component('login', {
    bindings: {},
    templateUrl: 'templates/login.html',
<<<<<<< HEAD
  }).controller('loginCtrl',function(){
    // this.giveCookie = (cname, cvalue, exdays) => {
    //   const d = new Date();
    //   d.setTime(d.getTime() + (exdays*24*60*60*1000));
    //   var expires = "expires="+ d.toUTCString();
    //   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    // };
=======
  }).controller('loginCtrl', ($http, $scope) => {
    $scope.submit = () => {
      $http({
        method: 'POST',
        url: '/login',
        data: {
          loginName: $scope.loginUser,
          loginPassword: $scope.loginPassword,
        },
      });
    };
>>>>>>> 03a193371416cf521d0eda276bf06ee25efb22ed
  });
