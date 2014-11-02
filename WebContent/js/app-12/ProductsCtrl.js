(function() {
	"use strict";
	
	angular.module('products-ctrl',[])
	.filter('nospaces', function() {
		return function(input) {
			return input.replace(/\s+/g, '');
		};
	})
	.controller('ProductsCtrl', ['$scope', 'ProductsFactory', function($scope, ProductsFactory) {
		
		$scope.products = [];
		
		$scope.all = function() {
			return ProductsFactory.query(function(data) {
				$scope.products = data;
			});
		};
		
		$scope.init = function() {
			this.all();
		};
		
	}]);
})();
