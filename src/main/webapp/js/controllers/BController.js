angular.module('minify')
.controller('BController', ['$scope', 'color', function(scope, color) { 
    scope.text = 'Page B';
    scope.color = color;
}]);