angular.module('shopping-app', ['ngRoute', 'products-services', 'products-ctrl', 'wizard-components'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	
	$routeProvider
	.when('/select', {templateUrl: 'templates/products.html'})
	.when('/bag', {templateUrl: 'templates/bag.html'})
	.when('/address', {templateUrl: 'templates/address.html'})
	.when('/finish', {templateUrl: 'templates/finish.html'})
	.otherwise({redirectTo: 'templates/products.html'});
	
	$locationProvider.hashPrefix('!');
}]);