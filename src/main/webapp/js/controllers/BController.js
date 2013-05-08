angular.module('minify')
.controller('BController', ['$scope', 'serverData', function(scope, serverData) { 
    scope.text = 'Page B';
    scope.color = serverData.data.color;
}]);