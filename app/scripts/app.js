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
    .controller('AgendaCtrl', function () {
      var schedule = [{
        paciente: '',
        medico: '',
        servico: ['Consulta', 'Exame', 'Retorno']
      }];
      
      this.schedule = schedule;

      this.addSchedule = function(schedule) {
        schedule.push(this.schedule);
      };
    });
