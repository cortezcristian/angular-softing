'use strict';

/**
 * @ngdoc function
 * @name projectApp.controller:ProveedorCtrl
 * @description
 * # ProveedorCtrl
 * Controller of the projectApp
 */
angular.module('projectApp')
  .controller('ProveedorCtrl', function ($scope, provServ) {

    $scope.listado = [];

    $scope.listar = function() {
      provServ.listar().then(function(listaProvs) {
        $scope.listado = listaProvs;
      });
    };

    $scope.borrar = function(id) {
      if (!angular.isDefined(id)) {
        throw new Error('Id was expected');
      }
      provServ.borrar(id).then(function(){
        $scope.listar();
        alert('Éxito!! Fue borrado!!');
      })
    }

    $scope.listar();

  });
