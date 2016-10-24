/**
 * Created by Andre on 16/10/2016.
 */
'use strict';

angular.module("CustomDirective", [])
    .controller("AppCtrl", ["$scope", "$http", function ($scope, $http) {

        $http.get("https://api.github.com/users/pumpersonda/repos")
            .success(function (data) {
                $scope.repos = data;
            })
            .error(function (err) {
                console.log(err);
            });

    }]);