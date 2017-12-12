'use strict';

/**
 * @ngdoc function
 * @name projectApp.controller:ProveedorCtrl
 * @description
 * # ProveedorCtrl
 * Controller of the projectApp
 */
angular.module('projectApp')
  .controller('ProveedorCtrl', function ($scope, $location, provServ, toastr) {

    $scope.listado = [];

    $scope.listar = function() {
      provServ.listar().then(function(listaProvs) {
        $scope.listado = listaProvs;
      });
    };

    $scope.goNew = function() {
      $location.url('/proveedor/new');
    }

    $scope.borrar = function(id) {
      if (!angular.isDefined(id)) {
        throw new Error('Id was expected');
      }
      provServ.borrar(id).then(function(){
        $scope.listar();
        toastr.success('Éxito!! Fue borrado!!');
      }).catch(function(err){
        toastr.error('No lo boreee!! :(', 'Error');
      });
    }

    $scope.listar();

  });
