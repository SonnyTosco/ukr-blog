var app = angular.module('ukrApp',['angularMoment', 'ngAnimate','ui.router']);

app.config(function($stateProvider,$urlRouterProvider) {  
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: '/views/login.html',
    controller: 'logController'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: '/views/signup.html',
    controller: 'logController'
  })

  .state('form',{
  	url: '/form',
  	templateUrl: '/views/form.html',
  	 controller: 'logController',
  })

   .state('form.account',{
  	url: '/account',
  	templateUrl: '/views/account.html',
  	controller: 'accountController'
  })

   .state('form.blog',{
  	url: '/blog',
  	templateUrl: '/views/blog.html',
  	controller: 'blogController'
  })

  $urlRouterProvider.otherwise('login');
  });

