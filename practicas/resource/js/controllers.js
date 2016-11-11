/**
 * Created by andre on 11/11/16.
 */


(function () {
 'use strict';
    angular
        .module("FinalApp")
        .controller('MainController',MainController);

    MainController.$inject = ['$scope','$resource'];
    function MainController($scope,$resource) {
        var Post = $resource('https://jsonplaceholder.typicode.com/posts/:id', {id: "@id"});
        var Users = $resource('https://jsonplaceholder.typicode.com/users/:id', {id: "@id"});
        $scope.posts = Post.query();
        $scope.users = Users.query();
    }
}());