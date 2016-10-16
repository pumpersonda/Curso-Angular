/**
 * Created by Andre on 16/10/2016.
 */
'use strict';

angular.module("ToDoList", ['LocalStorageModule'])
    .controller("ToDoListController", ["$scope", "localStorageService", function ($scope, $localStorage) {
        if ($localStorage.get('angular-todo-list')) {
            $scope.todo = $localStorage.get('angular-todo-list');
        } else {
            $scope.todo = [];
        }
        $scope.$watchCollection('todo',function (newValue,oldValue) {
            $localStorage.set('angular-todo-list',$scope.todo);
        });

        $scope.addAct = function(){
            $scope.todo.push($scope.newAct);
            $scope.newAct ={};

        };

        $scope.clean = function(){
            $scope.todo = [];

        };


    }]);