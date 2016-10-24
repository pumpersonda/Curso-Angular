/**
 * Created by Andre on 16/10/2016.
 */
'use strict';

angular.module("CustomDirective", [])
    .directive('myAutocomplete', function () {

        function link(scope, element, attrs) {

            $(element).autocomplete({
                source: scope.$eval(attrs.myAutocomplete),
                select: function (event, ui) {
                    event.preventDefault();
                    if (ui.item) {
                        scope.optionSelected(ui.item.value);
                    }
                },
                focus: function (event, ui) {
                    event.preventDefault();
                    $(this).val(ui.item.label)
                }
            });
        }

        return {
            link: link
        };
    })
    .directive('backImg', function () {
        return function (scope, element, attrs) {

            attrs.$observe('backImg', function (value) {
                element.css({
                    "background": "url(" + value + ")",
                    "background-size": "cover",
                    "background-position": "center"
                });
            });
        }
    })
    .controller("AppCtrl", ["$scope", "$http", function ($scope, $http) {
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