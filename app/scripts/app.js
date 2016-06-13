'use strict';

/**
 * @ngdoc overview
 * @name pistacheApp
 * @description
 * # pistacheApp
 *
 * Main module of the application.
 */
angular
  .module('pistacheApp', [
    '$scope',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/sobre', {
        templateUrl: 'views/sobre.html',
        controller: 'SobreCtrl',
        controllerAs: 'sobre'
      })
      .when('/catalogo', {
        templateUrl: 'views/catalogo.html',
        controller: 'CatalogoCtrl',
        controllerAs: 'catalogo'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
