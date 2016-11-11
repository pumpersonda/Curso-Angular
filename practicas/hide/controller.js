/**
 * Created by Andre on 01/10/2016.
 */
'use strict';

angular.module("MyFirstApp", [])
    .controller("MyFirstController", function ($scope, $http) {
        $scope.posts = [];
        $scope.loading = true;
        $http.get("https://jsonplaceholder.typicode.com/posts")
            .success(function (data) {
                $scope.posts = data;
                $scope.loading = false;
                console.log(data);
            })
            .error(function (err) {
                $scope.loading = false;
            });


    });
