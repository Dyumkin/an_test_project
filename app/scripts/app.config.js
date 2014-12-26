/**
 * Created by y.dyumkin on 26.12.2014.
 */

'use strict';

/**
 * @ngdoc overview
 * @name anTestProjectApp
 * @description
 * # anTestProjectApp
 *
 * Main config of the application.
 */
angular
  .module('anTestProjectApp')
  .config(configure);

configure.$inject =
  ['RestangularProvider', '$httpProvider'];

function configure(RestangularProvider, $httpProvider)
{
  RestangularProvider.setBaseUrl('http://apitestyii2.localhost/');

  $httpProvider.interceptors.push([
    '$injector',
    function ($injector) {
      return $injector.get('AuthInterceptor');
    }
  ]);
}

