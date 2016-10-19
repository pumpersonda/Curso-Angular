/**
 * Created by Andre on 16/10/2016.
 */
'use strict';

angular.module("mainModule", [])
    .filter("removeHml", function () {
        return function (text) {
            return String(text).replace(/<[^>]+>/gm, '');
        }
    })
    .controller("FilterController", ["$scope", function ($scope) {
        $scope.html = "<i>Hola</i>";

        $scope.json ={};
        $scope.json.title = "hola";
        $scope.json.body = "mundo";

        $scope.money = 2431;
    }]);