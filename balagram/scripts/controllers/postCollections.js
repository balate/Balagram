

angular.module("balagram").controller("ColeccionPostCtrl", function($scope, Posts, $location){
    

    //almacenamos en local la coleccion de post para que no se muestren tdos en la vista
    var posts = Posts.data;


    //establecemos las propiedades del paginador
    $scope.paginador={

        //cambiamos de pagina
        cambioDePagina: function(){

            //obtener el 1º y ultimo elemento de la pagina a mostrar
            var primero= ($scope.paginador.paginaActual -1)* $scope.paginador.elementosPorPagina;
            var ultimo= primero + $scope.paginador.elementosPorPagina;

            //establecemos en la vista la pagina selecionada
            $scope.posts=posts.slice(primero, ultimo);
        },

        //pagina actual
        paginaActual: 1,

        //Total de elementos -post-.
        totalElementos: posts.length,

        //Tamaño de pagina
        elementosPorPagina: 10
    };

    //forzamos el cambio de pagina
    $scope.paginador.cambioDePagina();

    //redirigir al post indicado (Detalles del Post).
    $scope.navegar=function(idPost){

        $location.path("/detalle/" + idPost);
    };
    //inyectar en el server lo dejo comentado pa no dar por culo en clase....
   // $http.post("http://cutregram-sp.appspot.com/api/1/posts", {"text": "Pruebas inserta texto"});
});