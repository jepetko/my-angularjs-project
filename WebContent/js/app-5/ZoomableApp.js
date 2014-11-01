(function() {
	"use strict";

	angular.module('ZoomableApp',[])
	.directive('zoomable', function() {
		//nicht scope von controller!
		var linkFunction = function(scope, element, attributes) {
			$(element).css('cursor', 'pointer');
			var fontSize = parseInt($(element).css('font-size'),10);

			$(element).on('click', function() {
				if(typeof scope.count === 'undefined') {
					scope.count = 1;
				} else {
					if(scope.count == 5) {
						scope.count = 1;
					} else {
						scope.count += 1;
					}
				}
				$(this).css('font-size', fontSize*scope.count);
			});
		};
		return {
			restrict: 'E',
			link: linkFunction
		};
	}).controller('ZoomCtrl', function($scope) {
		$scope.count = 1;	
	});	
})();
