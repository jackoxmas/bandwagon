'use strict';

/**
 * @ngdoc function
 * @name yoloOctoBearApp.controller:ArtistsCtrl
 * @description
 * # ArtistsCtrl
 * Controller of the yoloOctoBearApp
 */
angular.module('yoloOctoBearApp')
  .controller('ArtistsCtrl', function ($scope) {

    $scope.awesomeThings = [
      'Iggy',
      'Ciara',
      'Luke Bryan'
    ];

    $scope.addThing = function() {
      $scope.awesomeThings.push($scope.thing);
      $scope.thing = '';
    };

    $scope.removeThing = function (index) {
      $scope.awesomeThings.splice(index, 1);
    };
    
    $scope.isActive = function (viewLocation) {
      var active = (viewLocation === $location.path());
      return active;
    };

  });
