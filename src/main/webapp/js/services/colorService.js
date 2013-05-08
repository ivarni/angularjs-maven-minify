angular.module('minify')
.service('colorService',['$q', '$http', function($q, $http) {
    var colorPromise = $q.defer();
    $http.get('rest/color')
        .success(function(data) {
            colorPromise.resolve(data.color);
        });

    this.get = function() {
        return colorPromise.promise;
    };
}])