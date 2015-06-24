'use strict';

/**
 * @ngdoc service
 * @name anTestProjectApp.Session
 * @description
 * # Session
 * Service in the anTestProjectApp.
 */
(function () {
angular
  .module('anTestProjectApp')
  .service('Session', Session);

function Session() {
  this.create = function (sessionId, userId, userRole) {
    this.id = sessionId;
    this.userId = userId;
    this.userRole = userRole;
  };
  this.destroy = function () {
    this.id = null;
    this.userId = null;
    this.userRole = null;
  };
  return this;
}
})();
