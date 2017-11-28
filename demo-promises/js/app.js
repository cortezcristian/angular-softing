angular
  .module('futbol', [])
  .controller('futbolCtrl', function($scope, leerTXT) {
    $scope.mensaje = '';
    leerTXT.leerGoles('17').then(function(d){
      $scope.mensaje = d;
    }).catch(function(){
      // Fallo cargar jugadores
    });
  })
  .factory('leerTXT', function($http, $q) {
    return {
      leerGoles: function() {
        var p = $q.defer();

        $http({
          method: 'GET',
          url: './goles.csv'
        }).then(function(resp){
          var jugadores = [];
          var lines = resp.data.split('\n');
          angular.forEach(lines, function(line){
            var l = line.split(',');
            jugadores.push({nombre: l[0], goles: l[1] })
          });
          p.resolve(jugadores);
        }).catch(function(err){
          p.reject(err);
        });

        return p.promise;
      },
      leerJugador: function() {
        var p = $q.defer();

        $http({
          method: 'GET',
          url: './data.txt'
        }).then(function(resp){
          p.resolve(resp.data);
        }).catch(function(err){
          p.reject(err);
        });

        return p.promise;
      },

    };
  })

