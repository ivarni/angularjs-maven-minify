(function() {
    var resolveFunc = function(colorService) {
        return colorService.get();
    }
    resolveFunc.$inject = ['colorService'];

    angular
    .module('minify', ['minifyServices'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/a', { 
            templateUrl: 'templates/template_a.html', 
            controller: 'AController',
            resolve: {
                color: resolveFunc
            }
        });
        $routeProvider.when('/b', { 
            templateUrl: 'templates/template_b.html', 
            controller: 'BController',
            resolve: {
                color: resolveFunc
            }        
        });
        $routeProvider.when('/', { 
            templateUrl: 'templates/template.html' 
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    }])
    .run(['colorService', function(colorService) {
        colorService.init();
    }]);
})();