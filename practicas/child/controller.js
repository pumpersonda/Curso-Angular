/**
 * Created by Andre on 01/10/2016.
 */
'use strict';

angular.module("MyFirstApp", [])
    .run(function($rootScope){
        $rootScope.name = "André;"
    })
    .controller("MyFirstController", ["$scope", function ($scope) {
        $scope.name = "Roberto";


    }])
    .controller("Child",["$scope",function ($scope) {

    }]);
