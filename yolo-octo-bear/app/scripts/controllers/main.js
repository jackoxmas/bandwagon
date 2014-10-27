'use strict';

/**
 * @ngdoc function
 * @name yoloOctoBearApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoloOctoBearApp
 */
angular.module('yoloOctoBearApp')
  .controller('MainCtrl', function ($scope) {
    $scope.section = 'home';

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.addThing = function() {
    	$scope.awesomeThings.push($scope.thing);
    	$scope.thing = '';
    };

    $scope.removeThing = function (index) {
      $scope.awesomeThings.splice(index, 1);
    };

  });
