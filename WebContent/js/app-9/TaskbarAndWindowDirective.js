(function() {
	"use strict";
	
	angular.module('ui', [])
	.controller('TaskBarCtrl', ['$scope', function($scope) {
		
		$scope.titles = [];
		
		this.addTitle = function(t) {
			$scope.titles.push(t);
		};
		
		this.removeTitle = function(t) {
			$scope.titles = jQuery.grep($scope.titles, function(title) {
				return t != title;
			});	
		};
		
	}]).directive('taskBar', function() {
		
		var link = function(scope, el, attrs, TaskBarCtrl) {	
		};
		
		return {
			scope: {},
			restrict : 'E',
			transclude: true,
			controller: 'TaskBarCtrl',
			template: '<p><ul><li ng-repeat="t in titles">{{t}}</li></ul> <div ng-transclude></div> </p>',
			link: link
		};
	}).directive('extWindow', function() {	
		
		return {
			scope: {},
			//vorsicht, taskBar ist nicht auf dem selben element deklariert daher muessen wir anleiten im parent element (module) zu suchen.
			require: '^taskBar',
			restrict: 'E',
			transclude: true,
			/*jshint multistr: true */
			template: '<div class="ui-window">\
				<div class="ui-window-header"><span>{{windowTitle}}</span><div class="ui-window-close" ng-click="close()">X</div></div>\
				<div class="ui-window-content" ng-transclude></div>\
				</div>',
			link: function(scope, element, attrs, TaskBarCtrl) {
				scope.windowTitle = attrs.windowTitle;	
				scope.close = function() {
					$(element).css('display', 'none');
					TaskBarCtrl.removeTitle(scope.windowTitle);
				};
				TaskBarCtrl.addTitle(scope.windowTitle);
			}
		};
	});
})();