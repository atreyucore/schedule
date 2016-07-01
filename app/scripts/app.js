'use strict';

/**
 * @ngdoc overview
 * @name scheduleApp
 * @description
 * # scheduleApp
 *
 * Main module of the application.
 */
angular
  .module('scheduleApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/form-tpl.html', {
        templateUrl:'views/form-tpl.html',
        controller: 'AgendaCtrl',
        controllerAs: 'agenda'
      })
      .when('/list-tpl.html', {
        templateUrl:'views/list-tpl.html',
        controller: 'AgendaCtrl',
        controllerAs: 'agenda'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
    .controller('AgendaCtrl', ['$scope' ,function ($scope) {
      var schedule = {};

      var addSchedule = function() {
        schedule = angular.push(schedule);
      };
    }]);
