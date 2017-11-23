angular
  .module('futbol', [])
  .controller('futbolCtrl', function($scope, leerTXT) {
    $scope.mensaje = '';
    leerTXT.leerJugador().then(function(d){
      $scope.mensaje = d;
    });
  })
  .factory('leerTXT', function($http, $q) {
    return {
      leerJugador: function() {
        var p = $q.defer();

        $http({
          method: 'GET',
          url: './data.txt'
        }).then(function(resp){
          p.resolve(resp.data);
        })

        return p.promise;
      },

    };
  })

