/**
 * Created by Andre on 01/10/2016.
 */
'use strict';

angular.module("MyFirstApp", [])
    .controller("MyFirstController", function ($scope, $http) {
        $scope.posts=[];
        $http.get("https://jsonplaceholder.typicode.com/posts")
            .success(function (data) {
                $scope.posts=data;
                console.log(data);
            })
            .error(function (err) {

            });

    });
