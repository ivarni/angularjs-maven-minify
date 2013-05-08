angular.module('minify')
.service('colorService',['$q', '$http', function($q, $http) {
    this.get = function() {
        var self = this;
        if (self.color) {
            return self.color;
        }
        var deferred = $q.defer();
        $http.get('rest/color')
            .success(function(data) {
                self.color = data.color;
                deferred.resolve(self.color);
            });
        return deferred.promise;
    }
}])