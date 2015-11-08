
//Definicion de la aplicación
angular.module("balagram",["ngRoute", "angular-loading-bar", "ui.bootstrap"]);

//Con esta funcion habilitamos cruce de dominion en las peticiones (BACKEND.JS)
angular.module("balagram").config(function(BackendProvider, Properties){

   BackendProvider.establecerApiKey(Properties.apiKey);
    BackendProvider.habilitarPeticionesCors();
    BackendProvider.establecerUrlBackend(Properties.backendUrl)

});

//En fase de config inyectamos $routeProvider para configurar las rutas de la aplicacion.
angular.module("balagram").config(function($routeProvider){

    //definir la rutas de todos los post
    $routeProvider.when("/todos",{
        controller:"ColeccionPostCtrl" ,
        templateUrl:"views/ColeccionPosts.html",
        resolve: {
            Posts: ["Backend", function (Backend) {
                return Backend.obtenerTodoslosPost();
            }]
        }
    });

    //Definir las rutas de mis post
    $routeProvider.when("/mios", {
        controller:"MisPostCTRL" ,
        templateUrl:"views/MisPost.html",
        resolve:{
            Posts:["Backend", function(Backend){
                return Backend.obtenerMisPost();
            }]
        }

    });

    //definir la ruta de postDetalle
    $routeProvider.when("/detalle/:idPost", {
        controller:"DetallePostCtrl",
        templateUrl:"views/detallePost.html",
        resolve: {
            Post: ["Backend", "$route", function (Backend, $route) {
                return Backend.obtenerPost($route.current.params.idPost);
            }]
        }
    });

    //configuramos una ruta por defecto
    $routeProvider.otherwise( {
        redirectTo:"/todos"
    });
});