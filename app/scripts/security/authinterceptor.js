/**
 * Created by y.dyumkin on 24.12.2014.
 */

/**
 * @ngdoc service
 * @name anTestProjectApp.authInterceptor
 * @description
 * # authInterceptor
 * Factory in the anTestProjectApp.
 */

(function () {
  'use strict';

  angular
    .module('anTestProjectApp')
    .factory('authInterceptor', authInterceptor);

  authInterceptor.$inject = ['$rootScope', '$q', 'AUTH_EVENTS'];

  function authInterceptor($rootScope, $q, AUTH_EVENTS) {

    return {
      responseError: function (response) {
        $rootScope.$broadcast({
          401: AUTH_EVENTS.notAuthenticated,
          403: AUTH_EVENTS.notAuthorized,
          419: AUTH_EVENTS.sessionTimeout,
          440: AUTH_EVENTS.sessionTimeout
        }[response.status], response);
        return $q.reject(response);
      }
    };

  }

})();
