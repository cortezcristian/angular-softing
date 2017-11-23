Repo
https://github.com/cortezcristian/angular-softing

Cheatsheet Directives
https://egghead.io/articles/angularjs-core-services-directive-definition-object-and-ui-router-cheat-sheets


Bootsnip

https://bootsnipp.com/snippets/kW9gA

Code

```
<!doctype html>
<html ng-app="app1">
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular.min.js"></script>
  </head>
  <body>
    <div ng-controller="CalcCtrl" class="calculator">
      <div class="top">
        <span class="clear">C</span>
        <input class="screen" />
      </div>
      <button ng-repeat="n in pad">{{n | uppercase}}</button>
    </div>
    <script>
      angular.module('app1', []).controller('CalcCtrl', function($scope){
        debugger;
        $scope.pad = '12345+-=cX';

      });
    </script>
  </body>
</html>

```
