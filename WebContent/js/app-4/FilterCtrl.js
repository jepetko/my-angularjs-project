(function() {
	"use strict";

	var app = angular.module('MyApp', []);

	app.filter('decorate', function() {
		return function(input) {
			return input.split(/\.*/g).join('*');
		};
	});

	app.controller('FilterCtrl', function($scope) {	
		$scope.countries = [ { name: 'Austria' }, { name: 'Germany' }, { name: 'Schweiz' } ];
		
		$scope.country = { name : '' };
	});	
})();