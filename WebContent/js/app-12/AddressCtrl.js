(function() {
	"use strict";
	
	angular.module('address-app',[])
	.controller('AddressCtrl', ['$scope', function($scope) {		
		$scope.address = {};
		$scope.payments = ['', 'VISA', 'MasterCard', 'Diners', 'Cash'];
		
		
	}]);	
	
})();