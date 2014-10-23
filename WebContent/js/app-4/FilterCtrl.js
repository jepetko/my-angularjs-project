"use strict";

var app = angular.module('MyApp', []);

app.filter('reverse', function() {
	return function(input) {
		var reverse = '';
		for(var i=input.length-1;i>=0;i--) {
			reverse += input[i];
		}
		return reverse;
	};
});

app.controller('FilterCtrl', function($scope) {	
	$scope.countries = [ { name: 'Austria' },
	                     { name: 'Germany' },
	                     { name: 'Schweiz' } ];
	
	$scope.country = '';
});

