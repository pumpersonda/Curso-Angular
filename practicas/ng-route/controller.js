/**
 * Created by Andre on 27/10/2016.
 */


angular.module("CustomDirective")
    .controller("RepoController", ["$scope", "$http", "$routeParams", function ($scope, $http, $routeParams) {
        $scope.repo = {};

        $http.get("https://api.github.com/repos/pumpersonda/" + $routeParams.name)
            .success(function (data) {
                $scope.repo = data;
            })
            .error(function (err) {
                console.log(err);
            });
    }])
    .controller("ReposController", ["$scope", "$http", function ($scope, $http) {
        $scope.repos = [];
        $http.get("https://api.github.com/users/pumpersonda/repos")
            .success(function (data) {
                $scope.posts = data;
                for (var i = data.length - 1; i >= 0; i--) {
                    var repo = data[i];
                    $scope.repos.push(repo.name);
                }
            })
            .error(function (err) {
                console.log(err);
            });

        $scope.optionSelected = function (value) {
            $scope.$apply(function () {
                $scope.main_repo = value;

            })
        }
    }]);