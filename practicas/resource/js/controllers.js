/**
 * Created by andre on 11/11/16.
 */


(function () {
    'use strict';
    angular
        .module("FinalApp")
        .controller('MainController', MainController)
        .controller('PostController', PostController)
        .controller('NewPostController', NewPostController);

    MainController.$inject = ['$scope', '$resource','PostResource'];
    PostController.$inject = ['$scope', '$routeParams', 'PostResource','$location'];
    NewPostController.$inject = ['$scope', 'PostResource','$location'];


    function MainController($scope, $resource,PostResource) {

        var Users = $resource('https://jsonplaceholder.typicode.com/users/:id', {id: "@id"});
        $scope.posts = PostResource.query();
        $scope.users = Users.query();

        $scope.removePost = function (post) {

            PostResource.delete({id: post.id});

            $scope.posts = $scope.posts.filter(function (element) {
                return element.id !== post.id;
            });
        }
    }

    function PostController($scope, $routeParams, PostResource,$location) {
        $scope.title = 'Editar Post';
        $scope.post = PostResource.get({id: $routeParams.id});
        $scope.savePost = function () {
            PostResource.update({id:$scope.post.id},{data: $scope.post}, function (data) {
                console.log(data)
                $location.path('/');
            });
        }
    }

    function NewPostController($scope, PostResource,$location) {
        $scope.title = 'Crear Post';

        $scope.post = {};
        $scope.savePost = function () {
            PostResource.save({data: $scope.post}, function (data) {
                console.log(data)
                $location.path('/');
            });
        }

    }
}());