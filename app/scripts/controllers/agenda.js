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



  /* this.schedule = [
    {
      paciente: 'Maicon',
      medico: 'Maria',
      servico: ['Consulta', 'Exame', 'Retorno']
    }
  */
