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

(function () {
angular
  .module('anTestProjectApp')
  .directive('loginDialog', loginDialog);

loginDialog.$inject = ['AUTH_EVENTS'];

function loginDialog(AUTH_EVENTS) {
  return {
    restrict: 'A',
    template: '<div ng-if="visible" ng-include="\'scripts/security/login-form.html\'">',
    link: function (scope) {
      var showDialog = function () {
        scope.visible = true;
      };

      scope.visible = false;
      scope.$on(AUTH_EVENTS.notAuthenticated, showDialog);
      scope.$on(AUTH_EVENTS.sessionTimeout, showDialog);
    }
  };
}
})();
