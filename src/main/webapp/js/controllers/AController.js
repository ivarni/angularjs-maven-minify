angular.module('minify')
.controller('AController', ['$scope', 'serverData', function(scope, serverData) {
    scope.text = 'Page A';
    scope.color = serverData.data.color;
}]);