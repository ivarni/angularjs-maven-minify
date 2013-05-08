angular.module('minify')
.controller('AController', ['$scope', 'color', function(scope, color) {
    scope.text = 'Page A';
    scope.color = color.data.color;
}]);