var mod = angular.module('ui', []);

mod.directive('taskBar', function() {
	
	var link = function(scope, el, attrs) {	
		$(scope.titles).each(function(t) {
			el.append('<span>' + t + '</span>')
		});
	};
	
	return {
		scope: {},
		restrict : 'E',
		//Vorsicht: $scope, $element ... werden via dependeny injection injiziert.
		controller: function($scope, $element, $attrs) {
			
			$scope.titles = [];
			
			this.addTitles = function(title) {				
				$scope.titles.push(w);
			};
			
			this.removeTitle = function(title) {
				$scope.titles = jQuery.grep(function(n,i) {
					return title != n;
				});
			}
		}/*,
		link: link*/
	};
});

mod.directive('extWindow', function() {	
	
	return {
		scope: {},
		//vorsicht, taskBar ist nicht auf dem selben element deklariert daher muessen wir anleiten im parent element (module) zu suchen.
		require: 'tasddkBar',
		restrict: 'E',
		transclude: true,
		template: '<div class="ui-window">\
			<div class="ui-window-header"><span>{{windowTitle}}</span><div class="ui-window-close" ng-click="close()">X</div></div>\
			<div class="ui-window-content" ng-transclude></div>\
			</div>',
		link: function(scope, element, attrs, taskBarCtrl) {
			scope.windowTitle = attrs['windowTitle'];	
			scope.close = function() {
				$(element).css('display', 'none');
			}
			console.log(taskBarCtrl);
		}
	}
});