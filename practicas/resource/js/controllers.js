/**
 * Created by andre on 11/11/16.
 */


(function () {
 'use strict';
    angular
        .module("FinalApp")
        .controller('MainController',MainController)
        .controller('PostController',PostController);

    MainController.$inject = ['$scope','$resource'];
    function MainController($scope,$resource) {
        var Post = $resource('https://jsonplaceholder.typicode.com/posts/:id', {id: "@id"});
        var Users = $resource('https://jsonplaceholder.typicode.com/users/:id', {id: "@id"});
        $scope.posts = Post.query();
        $scope.users = Users.query();

        $scope.removePost = function (post) {

            Post.delete({id:post.id});

            $scope.posts = $scope.posts.filter(function (element) {
                return element.id !== post.id;
            });
        }
    }
    PostController.$inject = ['$scope','$routeParams','$resource'];
    function PostController($scope,$routeParams,$resource){
        var Post = $resource('https://jsonplaceholder.typicode.com/posts/:id', {id: "@id"});
        $scope.post = Post.get({id:$routeParams.id});
    }
}());