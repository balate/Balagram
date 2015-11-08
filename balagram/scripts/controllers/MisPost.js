

angular.module("balagram").controller("MisPostCTRL", function($scope, Posts){

    $scope.posts = Posts.data;

    //inyectar en el server lo dejo comentado pa no dar por culo en clase....
   // $http.post("http://cutregram-sp.appspot.com/api/1/posts", {"text": "Ola q ases"});


});