/**
 * Created by y.dyumkin on 24.12.2014.
 */

'use strict';

/**
 * @ngdoc directive
 * @name anTestProjectApp.formAutofillFix
 * @description
 * # formAutofillFix
 * Constant in the anTestProjectApp.
 */


angular.module('anTestProjectApp')
.directive('formAutofillFix', function ($timeout) {
  return function (scope, element, attrs) {
    element.prop('method', 'post');
    if (attrs.ngSubmit) {
      $timeout(function () {
        element
          .unbind('submit')
          .bind('submit', function (event) {
            event.preventDefault();
            element
              .find('input, textarea, select')
              .trigger('input')
              .trigger('change')
              .trigger('keydown');
            scope.$apply(attrs.ngSubmit);
          });
      });
    }
  };
});
