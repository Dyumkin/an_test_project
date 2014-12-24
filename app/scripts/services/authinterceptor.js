/**
 * Created by y.dyumkin on 24.12.2014.
 */

'use strict';

/**
 * @ngdoc service
 * @name anTestProjectApp.AuthInterceptor
 * @description
 * # AuthInterceptor
 * Factory in the anTestProjectApp.
 */
angular.module('anTestProjectApp')
  .factory('AuthInterceptor', function ($rootScope, $q,
                                        AUTH_EVENTS) {
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
  });
