/**
 * Created by y.dyumkin on 19.01.2015.
 */
'use strict';

/**
 * @ngdoc factory
 * @name anTestProjectApp.postService
 * @description
 * # postService
 * Factory in the anTestProjectApp.
 */
angular
  .module('anTestProjectApp')
  .factory('postService', postService);

postService.$inject = ['Restangular'];

function postService(Restangular)
{
  return {
    getPosts: getPosts
  };

  function getPosts(){
    return Restangular.all('blog').getList()
      .then(getPostsComplete, getPostsFailed);


    function getPostsComplete(blogs) {
        return blogs;
    }

    function getPostsFailed(response) {
        return response;
    }


  }
}
