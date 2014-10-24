"use strict";

angular.module('FruitsApp', [])
.factory('FruitsService', function() {
	var fruits = ['apple', 'pear', 'raspberry', 'cherry', 'banana'];
	
	return {
		all : function() {
			return fruits;
		},
		first : function() {
			return fruits[0];
		},
		last : function() {
			return fruits[fruits.length-1];
		}
	};
})
.controller('FruitsCtrl', function($scope, FruitsService) {
	$scope.selectedFruits = [];
	
	$scope.select = function(which) {
		switch(which) {
			case 'all':
				$scope.selectedFruits = $scope.selectedFruits.concat(FruitsService.all());
				break;
			case 'first':
				$scope.selectedFruits.push(FruitsService.first());
				break;
			case 'last':
				$scope.selectedFruits.push(FruitsService.last());
				break;
		}	
	};
	
	$scope.clear = function() {
		$scope.selectedFruits = [];
	};
});