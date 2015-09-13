'use strict';

// Declare app level module which depends on views, and components
angular.module('PTF', [
  'ngRoute',
  'PTF.view1',
  'PTF.view2',
  'PTF.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
