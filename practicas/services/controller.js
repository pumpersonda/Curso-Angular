/**
 * Created by Andre on 16/10/2016.
 */
'use strict';

angular.module("ToDoList3", ['LocalStorageModule'])
    .service("ToDoService", ["localStorageService", function ($localStorage) {

        this.key = "angular-todo-list";

        if ($localStorage.get(this.key)) {
            this.activities = $localStorage.get(this.key);
        } else {
            this.activities = [];
        }

        this.add = function (newAct) {
            this.activities.push(newAct);
            this.updateLocalStorage()
        };

        this.updateLocalStorage = function () {
            $localStorage.set(this.key, this.activities);
        };

        this.clean = function () {
            this.activities = [];
            this.updateLocalStorage();
            return this.getAll();
        };

        this.getAll = function () {
            return this.activities;
        };

        this.removeItem = function (item) {
            this.activities = this.activities.filter(function (activity) {
                return activity !== item;
            });

            this.updateLocalStorage();
            return this.getAll();
        };

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