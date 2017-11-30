angular
  .module('futbol', [])
  .controller('futbolCtrl', function($scope, leerTXT) {
    $scope.mensaje = '';
    leerTXT.leerGoles('mess').then(function(d){
      $scope.mensaje = d;
    }).catch(function(){
      // Fallo cargar jugadores
    });
  })
  .factory('leerTXT', function($http, $q) {
    return {
      leerGoles: function(valorBuscado) {
        var p = $q.defer();

        $http({
          method: 'GET',
          url: './goles.csv'
        }).then(function(resp){
          var jugadores = [];
          var lines = resp.data.split('\n');
          var regexBuscar = new RegExp('.*'+valorBuscado+'.*', 'i');
          angular.forEach(lines, function(line){
            var l = line.split(',');
            if (
              angular.isString(l[0]) && angular.isString(l[1])
              && ( l[0].match(regexBuscar) || l[1].match(regexBuscar) )
              ) {
              jugadores.push({nombre: l[0], goles: l[1] })
            }
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

