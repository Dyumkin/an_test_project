'use strict';

/**
 * @ngdoc service
 * @name anTestProjectApp.USER_ROLES
 * @description
 * # USER_ROLES
 * Constant in the anTestProjectApp.
 */
angular.module('anTestProjectApp')
  .constant('USER_ROLES', {
        all: '*',
        admin: 'ROLE_ADMIN',
        user: 'ROLE_USER',
        guest: 'guest'
    });
