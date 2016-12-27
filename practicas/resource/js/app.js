/**
 * Created by andre on 11/11/16.
 */

(function () {
    'use strict';
    angular.module("FinalApp", ['lumx', 'ngRoute', 'ngResource'])
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProvider) {
        $routeProvider
            .when("/", {
                controller: "MainController",
                templateUrl: "templates/home.html"
            })
            .when("/post/:id", {
                controller: "PostController",
                templateUrl: "templates/post.html"
            })
            .when("/posts/new", {
                controller: "NewPostController",
                templateUrl: "templates/post_form.html"
            })
            .when("/posts/edit/:id", {
                controller: "PostController",
                templateUrl: "templates/post_form.html"
            });
    }


}());

