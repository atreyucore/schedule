'use strict';

/**
 * @ngdoc function
 * @name scheduleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scheduleApp
 */
angular.module('scheduleApp')
  .controller('AgendaCtrl', function () {
    this.schedule = schedule;
  });

  var schedule = {
    paciente: 'Maicon',
    medico: 'Maria',
    servico: ['Consulta', 'Exame', 'Retorno']
  }
