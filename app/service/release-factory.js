angular.module("app.factories").factory('releaseFactory', [ '$q', '$http', 'url',
  function($q, $http, url) {
  
    var getRelease = function() {
      var deferred = $q.defer();
      var resource = url.createResourceUrl("/example/release", "releaseId", "1");

      $http.get(resource.toString()).success(function(data, status, headers, config) {
        deferred.resolve(data);
      });

      return deferred.promise;
    };

    return {
      getRelease : getRelease
    };
    
  }]
);