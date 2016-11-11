/**
 * Created by Andre on 01/10/2016.
 */
'use strict';

angular.module("MyFirstApp", [])
    .controller("MyFirstController", function ($scope, $http) {
        $scope.posts = [];
        $scope.newPost = {};
        $http.get("https://jsonplaceholder.typicode.com/posts")
            .success(function (data) {
                $scope.posts = data;
                console.log(data);
            })
            .error(function (err) {

            });


        $scope.addPost = function () {
            $http.post("https://jsonplaceholder.typicode.com/posts", {
                title: $scope.newPost.title,
                body: $scope.newPost.body,
                userId: 1
            })
                .success(function (data, status, header, config) {
                    console.log(header);
                    $scope.posts.push(data);
                    $scope.newPost = {};
                })
                .error(function (err, status, header, config) {

                });
        }

    });
