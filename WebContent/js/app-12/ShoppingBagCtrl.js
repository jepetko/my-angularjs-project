(function() {
	
	"use strict";
		
	angular.module('shoppingbag-app',[])
	.service('BagService', function() {
		this.bag = {};
		this.getBag = function() {
			return this.bag;
		}
	})
	.controller('ShoppingBagCtrl', ['$scope', 'BagService', function($scope, BagService) {
		
		$scope.bag = BagService.getBag();
		
		//remove empty values e.g. {1 : ""}
		var cleanUp = (function(s) {
			return function(newValue) {
				if(newValue) {
					for(var a in newValue) {
						if(newValue[a] === "") {
							delete s.bag[a];
						}
					}
				}	
			};
		})($scope);
		
		$scope.$watch('bag', function(newValue) {
			cleanUp(newValue);
		}, true);
		
	}]);
	
})();