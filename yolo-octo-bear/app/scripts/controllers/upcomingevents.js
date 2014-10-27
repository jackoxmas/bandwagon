'use strict';

/**
 * @ngdoc function
 * @name yoloOctoBearApp.controller:UpcomingeventsCtrl
 * @description
 * # UpcomingeventsCtrl
 * Controller of the yoloOctoBearApp
 */
angular.module('yoloOctoBearApp')
  .controller('UpcomingeventsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'Iggy Concert 5/12/14',
      'Ciara at Borders MSG 6/10/14',
      'Iggy at Starbucks 6/12/14',
      'Iggy Concert 6/17/14',
      'Ciara Concert at UF Stadium 6/23/14',
      'Luke Bryan Signing at Target 7/2/14',
      'Ciara at Gainesville High School 7/20/14'
    ];
  });
