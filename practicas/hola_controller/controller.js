/**
 * Created by Andre on 01/10/2016.
 */
'use strict';

 angular.module("MyFirstApp", [])
.controller("MyFirstController", function ($scope) {
    $scope.name = "André";
    $scope.newComment = {};
    $scope.comments = [
        {
            comment:":D",
            username : "André"
        },
        {
            comment:":C",
            username:"Unknown"
        }
    ];

    $scope.addComment = function () {
        $scope.comments.push($scope.newComment);
        $scope.newComment = {};

    };

});
