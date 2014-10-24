"use strict";

function ClickCtrl($scope) {
	
	$scope.init = function() {
		$scope.count = 0;
	};
	
	$scope.increment = function() {
		$scope.count++;
	};
}