'use strict';
/*global $:false */
      
$('#modal_trigger').leanModal({top : 200, overlay : 0.6, closeButton: '.modal_close' });

/**
 * @ngdoc overview
 * @name yoloOctoBearApp
 * @description
 * # yoloOctoBearApp
 *
 * Main module of the application.
 */
angular
  .module('yoloOctoBearApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/artists', {
        templateUrl: 'views/artists.html',
        controller: 'ArtistsCtrl'
      })
      .when('/upcomingevents', {
        templateUrl: 'views/upcomingevents.html',
        controller: 'UpcomingeventsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
