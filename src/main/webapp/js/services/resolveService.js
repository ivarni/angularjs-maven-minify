angular.module('minify')
.service('colorService',['$q', '$http', function($q, $http) {
    this.get = function() {
        var deferred = $q.defer();
        $http.get('rest/color')
            .success(function(data) {
                deferred.resolve(data.color);
            });
        return deferred.promise;
    }
}])