// eslint-disable-next-line no-undef
angular.module('gtrak')
  .component('news', {
    bindings: {
      data: '<',
    },
    templateUrl: 'templates/news.html',
  }).controller('newsCtrl', () => {
  });
