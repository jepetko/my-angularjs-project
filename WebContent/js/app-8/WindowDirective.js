angular.module('ui', [])
.directive('window', function() {	
	
	var link = function(scope, el, attrs) {
		scope.windowTitle = attrs.windowTitle;	
		scope.close = function() {
			$(el).css('display', 'none');
		};
	};
	
	return {
		scope: {},
		restrict: 'E',
		transclude: true,
		/*jshint multistr: true */
		template: '<div class="ui-window">\
			<div class="ui-window-header"><span>{{windowTitle}}</span><div class="ui-window-close" ng-click="close()">X</div></div>\
			<div class="ui-window-content" ng-transclude></div>\
			</div>',
		link: link
	};
});