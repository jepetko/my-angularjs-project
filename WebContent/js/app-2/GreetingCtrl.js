(function() {
	"use strict";

	var app = angular.module('app', [])
	.controller('GreetingCtrl', function($scope) {
		$scope.names = {
				kati: 'F',
				peter: 'M',
				bertram: 'M',
				susi: 'F'
		};
		
		$scope.name = 'Niemand';
		
		$scope.getSex = function() {
			var sex = $scope.names[$scope.name.toLowerCase()];
			if(sex == 'F') {
				return 'eine Frau';
			} else
			if(sex == 'M') {
				return 'ein Mann';
			}
		};
	});
})();
