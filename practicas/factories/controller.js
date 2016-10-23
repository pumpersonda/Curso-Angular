/**
 * Created by Andre on 16/10/2016.
 */
'use strict';

angular.module("ToDoList2", ['LocalStorageModule'])
    .factory("ToDoService", ["localStorageService", function ($localStorage) {
        var ToDoService = {};
        ToDoService.key = "angular-todo-list";

        if ($localStorage.get(ToDoService.key)) {
            ToDoService.activities = $localStorage.get(ToDoService.key);
        } else {
            ToDoService.activities = [];
        }

        ToDoService.add = function (newAct) {
            ToDoService.activities.push(newAct);
            ToDoService.updateLocalStorage()
        };

        ToDoService.updateLocalStorage = function () {
            $localStorage.set(ToDoService.key, ToDoService.activities);
        };

        ToDoService.clean = function () {
            ToDoService.activities = [];
            ToDoService.updateLocalStorage();
            return ToDoService.getAll();
        };

        ToDoService.getAll = function () {
            return ToDoService.activities;
        };

        ToDoService.removeItem = function (item) {
            ToDoService.activities = ToDoService.activities.filter(function (activity) {
                return activity !== item;
            });

            ToDoService.updateLocalStorage();
            return ToDoService.getAll();
        };

        return ToDoService;
    }])
    .controller("ToDoListController", ["$scope","ToDoService", function ($scope,ToDoService) {

        $scope.todo = ToDoService.getAll();
        $scope.newAct = {};
        $scope.addActivity = function () {
            ToDoService.add($scope.newAct);
            $scope.newAct = {};

        };

        $scope.removeActivity = function (item) {
            $scope.todo = ToDoService.removeItem(item);
        };


        $scope.cleanActivity = function () {
            $scope.todo = ToDoService.clean();
        };


    }]);