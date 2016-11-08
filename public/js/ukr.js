var app = angular.module('ukrApp',['angularMoment', 'ngAnimate','ui.router']);

app.config(function($stateProvider,$urlRouterProvider) {  
  $stateProvider
  .state('blog', {
    url: '/',
    templateUrl: '/views/index.html',
    controller: 'ukrController'
  });


  $urlRouterProvider.otherwise('blog');
  });

