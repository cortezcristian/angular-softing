angular
  .module('app1', [])
  .controller('unoCtrl', function($scope, afipServ, LSServ) {
    $scope.prop = 'Valor';
    $scope.ivaTotal = afipServ.calcIva(1000);
    $scope.calc = LSServ.get('calc') || '';
  })
  .directive('datePicker', function($filter, afipServ){
    return {
      restrict: 'EACM',
      template: '<span class="date-picker">texto</span>',
      link: function(scope, elem, attrs) {
        var sinVocales = $filter('sinvocales');
        scope.fecha = Date.now();
        sinVocales('dkddkkdkdaasddf')

      }
    };
  })
  .filter('sinvocales', function() {
    return function(val) {
      return val;
    };
  })
  .factory('LSServ', function() {
    //
    return {
      get: function(key) {
        var valor = window.localStorage.getItem(key);

        return JSON.parse(valor);
      },
      set: function(key, val) {
        window.localStorage.setItem(key, JSON.stringify(val));
      },
      delete: function(key) {},
      clear: function() {},
    };
  })
  .factory('isibServ', function() {
    //
  })
  .factory('afipServ', function(isibServ, $http) {
    return {
      ars2usd: function(montoArs) {
        $http({
          method: 'GET',
          url: '/api/v1/cotizacion/usd'
        }).then(function(usdValor){
          var cotActual = usdValor * montoArs;

        })
      }
      tenedor: function() {
      },
      calcIva: function(n) {
        return n*0.21;
      }
    };
  });

  /*
  <div ng-controller="unoCtrl">
    <input type="number" ng-model="prop" />
  </div>
   */

