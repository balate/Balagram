
angular.module("balagram").provider("Backend", function($httpProvider){

    var urlBackend="";

    //CONFIG -- OBJETO SE LE PASA AL SERVER PARA COBNECTAR
    return{

        // PASAMOS APIKEY AL SERVER:con esta funcion establecemos el apikey del backend
        establecerApiKey:function(valor){
            $httpProvider.defaults.headers.common={
                "X-Cutregram-Api-Key":valor

        };
        },

         //FUNCION PARA REALIZAR PETICIONES AL SERVER:con esta fi¡uncion habilitamos cruce de dominio en las peticiones
        habilitarPeticionesCors: function(){
            $httpProvider.defaults.headers.post ={};
            $httpProvider.defaults.headers.put ={};
            $httpProvider.defaults.headers.patch ={};
        },

        //URL DEL BACKEND:con esta funcion establecemos la URL del Backend
        establecerUrlBackend: function (valor) {
          urlBackend= valor;
        },

        //definimos el factory que se inyectara en la fase de RUN
        $get:["$http",function($http){

            //RUN -- OBTENEMOS OBJETO DEL SERVER
            return{
                //obtenemos todos los post.
                obtenerTodoslosPost:function(){
                    return $http.get(urlBackend + "/posts", {
                       cache:true
                    });
                },
                //obtenemos mis post.
                obtenerMisPost:function() {
                    return $http.get(urlBackend + "/posts/me", {
                        cache: true
                    });
                },
                //obtenemos el post Indicado para el detalle
                obtenerPost: function (idPost) {
                    return $http.get(urlBackend + "/posts/" + idPost);
                },

                //sumamos un me gusta al post indicado
                sumarMeGusta: function(idPost){
                    return $http.post(urlBackend + "/posts/" + idPost + "/like");
                },

                //sumamos un no me gusta al post indicado
                sumarNoMeGusta: function(idPost){
                    return $http.post(urlBackend + "/posts/" + idPost + "/dislike");
                },

                // Añadimos un nuevo comentario
                enviarComentario: function(idPost, comentario){
                 return $http.post(urlBackend + "/posts/" + idPost + "/comments", comentario)

                }
            };

        }]
    };

});