angular.module('users', [])
.controller('UsersController', ['$scope', 'cookieHandler', function($scope, cookieHandler) {
	$scope.currentUser = cookieHandler.get('login');
}]);