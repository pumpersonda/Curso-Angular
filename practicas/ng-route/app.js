/**
 * Created by Andre on 16/10/2016.
 */
'use strict';

angular.module("CustomDirective", ["ngRoute"])
    .config(function ($routeProvider) {

        $routeProvider
            .when("/", {
                controller: "ReposController",
                templateUrl: "templates/home.html"
            })
            .when("/repo/:name", {
                controller: "RepoController",
                templateUrl: "templates/repo.html"
            })
            .otherwise("/");

    });