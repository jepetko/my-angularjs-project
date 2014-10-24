"use strict";

angular.module('ObserverApp', [])
.controller('ObserverCtrl', function($scope) {
	$scope.name = '';
	$scope.log = '';
	
	$scope.$watch('name', function(newValue, oldValue) {
		if(newValue !== oldValue) {
			$scope.log += ('change: [' + oldValue + '] ==> [' + newValue + ']\r\n');
		}
	});
});