'use strict';

/**
 * @ngdoc service
 * @name projectApp.provServ
 * @description
 * # provServ
 * Factory in the projectApp.
 */
angular.module('projectApp')
  .factory('provServ', function ($q, $http) {
    // Service logic
    // ...

    // Public API here
    return {
      borrar: function (id) {
        var p = $q.defer();

        $http.delete('http://localhost:9001/proveedores/'+id)
          .then(function(res){
            p.resolve(res.data);
          })
          .catch(function(err){
            p.reject(err);
          });

        return p.promise;
      },
      listar: function () {
        var p = $q.defer();

        $http.get('http://localhost:9001/proveedores')
          .then(function(res){
            p.resolve(res.data);
          })
          .catch(function(err){
            p.reject(err);
          });

        return p.promise;
      }
    };
  });
