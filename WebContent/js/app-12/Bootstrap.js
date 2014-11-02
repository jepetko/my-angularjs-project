(function() {
	"use strict";
	angular.element(window).ready(function() {
		var parent = $('#shopping-app');
		angular.bootstrap(parent, [ 'shopping-app' ]);
	});
})();