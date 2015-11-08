//directiva que representa cada fila de un post
angular.module("balagram").directive("elementoPost",function(Backend){

    return {

        //con restrict indicamos si usar la directiva como elemento (E) o como atributo (A)
        restrict: "AE",

        //con template establecemos la vista de la directiva (He creado otro archivo por el tocho que era para almacenar el html y le paso el nombre del fichero)
        templateUrl:"views/ElementoPost.html",

        //Con scope establecemos la interfaz de comunicacion.
        scope:{
            post: "=", // Con = establecemos enlace bidirecional
            onPostClick: "&" // con & establecemos notificacion desde la directiva hacia el scope padre
        },


        // En link establecemos la logica de la directiva y manipulamos el DOM en caso de necesitarlo
        link: function(scope){

            scope.notificarClick= function() {
                scope.onPostClick({idPost: scope.post.id});

            };

            //sumamos un me gusta
            scope.meGusta = function(){
                Backend.sumarMeGusta(scope.post.id).then(
                    function (){
                        scope.post.likes++;
                    }
                );

            };

            //sumamos un no me gusta
            scope.noMeGusta = function(){
                Backend.sumarNoMeGusta(scope.post.id).then(
                    function () {
                        scope.post.dislikes++;
                    }
                );

            };
        }

      };
});


