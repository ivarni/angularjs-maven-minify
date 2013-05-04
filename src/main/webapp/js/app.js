angular.module('minify', [], function($routeProvider) {
    $routeProvider.when('/a',  { templateUrl: 'templates/template_a.html', controller: 'AController'})
    $routeProvider.when('/b',  { templateUrl: 'templates/template_b.html', controller: 'BController'})
    $routeProvider.when('/',  { templateUrl: 'templates/template.html' })
    $routeProvider.otherwise({ redirectTo: '/' });
});