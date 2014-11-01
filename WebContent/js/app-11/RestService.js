(function() {
	"use strict";
	
	angular.module('rest', ['ngResource'])	
	//note: difference between factory and service!!
	.factory('Employees', function($resource) {
		return $resource('/my-angularjs-project/company/employees/:id');
	})
	.controller('EmployeesCtrl', function($scope, Employees) {
		
		$scope.employees = [];
		
		Employees.query(function(data) {
			$scope.employees = data;
		});
		
		$scope.getEmployee = function(id) {
			return Employees.get({id: id});
		};
	})
	.directive('card', function() {		
		return {
			scope: {
				employee: '=',
				//note: don't give the function the same name as the referenced name in html !!!
				action: '&'
			},
			restrict : 'E',
			replace: true,
			transclude: true,		
			controller: function($scope) {
				$scope.get = function() {
					$scope.data = $scope.action({id : $scope.employee.id});					
				};			
			},
			/*jshint multistr: true */
			template : '<div>\
						<h3>{{employee.name}} {{employee.surname}}</h3>\
						<button ng-click="get()">[?]</button><span>{{data.department}}</span>\
						<div ng-transclude></div>\
						</div>'
		};
	})
	.directive('barometer', function() {		
		return {
			scope: {
				ranking: '@'
			},
			ranking : '@',
			restrict: 'E',
			controller: function($scope) {
				$scope.rankingAsInt = function() {
					return parseInt($scope.ranking,10);
				};
				$scope.width = function() {
					return (this.rankingAsInt() === 0) ? 10 : this.rankingAsInt();
				};
				$scope.bg = function() {
					var r = this.rankingAsInt();
					if(r === 0) {
						return '#fff';
					} else if(r < 25) {
						return 'lightblue';
					} else if(r >= 25 && r < 50 ) {
						return 'blue';
					} else {
						return 'darkblue';
					}
				};
				$scope.color = function() {
					var r = this.rankingAsInt();
					return (r < 25) ? '#000' : '#fff';
				};
			},
			/* jshint multistr: true */
			template : '<div class="ranking">\
						<div style="width:{{width()}}%;background:{{bg()}};color:{{color()}};">{{ranking}} %</div>\
					</div>'
		};
	});
})();