'use strict';

/**
 * @ngdoc function
 * @name projectApp.controller:ProveedornewCtrl
 * @description
 * # ProveedornewCtrl
 * Controller of the projectApp
 */
angular.module('projectApp')
  .controller('ProveedornewCtrl', function ($scope) {

    $scope.prov = {};

    $scope.crearProv = function(){
      alert("Crear proveedor");
    };
  });
