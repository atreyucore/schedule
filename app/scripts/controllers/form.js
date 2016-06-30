'use strict';

/**
 * @ngdoc function
 * @name scheduleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scheduleApp
 */
angular.module('scheduleApp')
  .controller('FormCtrl' ['$scope',  function () {
    $scope.schedule = [];
    $scope.paciente = '';
    $scope.medico = '';

    $scope.submit = function() {
      $scope.schedule.push(this.paciente, this.medico);
      $scope.paciente = '';
      $scope.medico = '';
    }
  }]);
