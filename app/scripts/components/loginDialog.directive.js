/**
 * Created by y.dyumkin on 24.12.2014.
 */
'use strict';

/**
 * @ngdoc directive
 * @name anTestProjectApp.loginDialog
 * @description
 * # loginDialog
 * Constant in the anTestProjectApp.
 */


angular.module('anTestProjectApp')
.directive('loginDialog', function (AUTH_EVENTS) {
  return {
    restrict: 'A',
    template: '<div ng-if="visible" ng-include="\'views/login-form.html\'">',
    link: function (scope) {
      var showDialog = function () {
        scope.visible = true;
      };

      scope.visible = false;
      scope.$on(AUTH_EVENTS.notAuthenticated, showDialog);
      scope.$on(AUTH_EVENTS.sessionTimeout, showDialog);
    }
  };
});
