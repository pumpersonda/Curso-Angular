/**
 * Created by Andre on 27/10/2016.
 */
'use strict';
angular.module("CustomDirective")
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
    });
