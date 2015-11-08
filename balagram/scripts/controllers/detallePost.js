angular.module("balagram").controller("DetallePostCtrl", function($scope, Post, Backend){

    $scope.post = Post.data;


    //boton volver
    $scope.volver= function(){
      history.back();
    };

    //enviamos al servidor un nuevo comentario
    $scope.enviarComentario= function () {

        var comentario = {
            text:$scope.comentario

        };

        //enviamos el comentario al servidor.
        Backend.enviarComentario($scope.post.id, comentario).then(

            //si ha ido bien
            function(respuesta){
                //añadimos el comentario creado en la coleccion del post. Nos ahorramos ir de nuevo al post
                $scope.post.comments.unshift(respuesta.data);
            },
            function(error){

                //TODO: Mostrar el error.
            }
        );


    };

});
