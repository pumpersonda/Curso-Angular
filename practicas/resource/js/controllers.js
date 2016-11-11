/**
 * Created by andre on 11/11/16.
 */


(function () {
 'use strict';
    angular
        .module("FinalApp")
        .controller('MainController',MainController);

    MainController.$inject = ['$scope'];
    function MainController($scope){
        $scope.name= "andre;"
    }
}());