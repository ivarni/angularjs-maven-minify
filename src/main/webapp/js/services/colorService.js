angular.module('minifyServices', [])
.service('colorService',['$q', '$http', function($q, $http) {
    var colorPromise = $q.defer();

    this.get = function() {
        return colorPromise.promise;
    };

    this.init = function() {
        $http.get('rest/color')
            .success(function(data) {
                colorPromise.resolve(data.color);
            });
    }
}])