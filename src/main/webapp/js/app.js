var resolveFunc = function($http) {
    return $http.get('rest/color');
}
resolveFunc.$inject = ['$http'];

angular
.module('minify', [])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/a', { 
        templateUrl: 'templates/template_a.html', 
        controller: 'AController',
        resolve: {
            serverData: resolveFunc
        }
    });
    $routeProvider.when('/b', { 
        templateUrl: 'templates/template_b.html', 
        controller: 'BController',
        resolve: {
            serverData: resolveFunc
        }        
    });
    $routeProvider.when('/', { 
        templateUrl: 'templates/template.html' 
    });
    $routeProvider.otherwise({ redirectTo: '/' });
}]);