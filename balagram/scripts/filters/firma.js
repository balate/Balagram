//filtros que escriben una firma de usuario y fecha
angular.module("balagram").filter("Firma", function ($filter) {

    // los filtros retoman siempre funciones
    return function(autor, fecha)
    {
        return "Publicado por: " + autor + " en " + $filter("date")(fecha, 'medium');
    }
});