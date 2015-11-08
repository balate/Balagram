
angular.module("balagram").controller("BarraNavegacionCrtl",function($scope, $route){

   $scope.rutaEsTodos = function(){

       return $route.current && $route.current.$$route.originalPath === "/todos";
   };

    $scope.rutaEsMios = function(){

        return $route.current && $route.current.$$route.originalPath === "/mios";
    };
});