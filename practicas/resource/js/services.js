/**
 * Created by andre on 11/11/16.
 */
(function () {
    'use strict';
    angular
        .module("FinalApp")
        .factory("PostResource", ['$resource', function ($resource) {
            return $resource('https://jsonplaceholder.typicode.com/posts/:id', {
                id: "@id"
            }, {
                update: {
                    method: 'PUT'
                }
            });
        }]);


}());