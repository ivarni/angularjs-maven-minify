angular.module('minify')
.controller('Controller', ['$scope', '$location', function(scope, location) { 
    scope.menuItems = [
        { link: '/', text: 'Home' },
        { link: '/a', text: 'Page A' },
        { link: '/b', text: 'Page B' }
    ];
    scope.active = function(item) {
        return location.path() === item.link ? 'active' : '';
    };    
}]);