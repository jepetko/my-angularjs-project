angular.module('http-services', [])
.controller('DataGrabberCtrl', ['$scope', '$http', function($scope, $http) {

	$scope.url = '/my-angularjs-project/greet/greeting';
	$scope.data = 'no data';
	
	$scope.load = function() {
		$http.get($scope.url)
		.success(function(data) {
			$scope.status = 'success';
			$scope.data = data;
		})
		.error(function() {
			$scope.status = 'error';
			$scope.data = 'no data';
		});
	};
	
	$scope.load();
}]);
