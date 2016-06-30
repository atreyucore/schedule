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
        controller: 'FormCtrl',
        controllerAs: 'form'
      })
      .when('/list-tpl.html', {
        templateUrl:'views/list-tpl.html',
        controller: 'AgendaCtrl',
        controllerAs: 'agenda'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  angular.module('scheduleApp')
    .controller('AgendaCtrl', function () {
      this.schedule = [
        {
          paciente: '',
          medico: '',
          servico: ''
        }
      ];

      this.addSchedule = function(schedule) {
        schedule.push(this.schedule);
      };
    });
