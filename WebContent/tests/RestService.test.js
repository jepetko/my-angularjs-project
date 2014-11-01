describe('rest', function() {
	
	var scope, rootScope, compile, employeesCtrl, httpBackend;
	/*jshint multistr: true */
	var tpl = '<div ng-controller="EmployeesCtrl">\
			<card ng-repeat="e in employees" employee="e" action="getEmployee(id)">\
				<barometer ranking="{{e.ranking}}"/>\
			</card>\
			</div>';
	
	var compileTpl = function(tpl) {
		var link = compile(tpl);
		var element = link(scope);
		scope.$digest();
		return element;
	};
	
	beforeEach(module('rest'));
	
	beforeEach(inject(function($rootScope, $compile, $controller, Employees, $httpBackend) {
		rootScope = $rootScope;
		scope = $rootScope.$new();
		compile = $compile;
		employeesCtrl = $controller('EmployeesCtrl', {'$scope': scope, 'Employees': Employees});
		httpBackend = $httpBackend;
		/*jshint multistr: true */
		httpBackend.whenGET('/my-angularjs-project/company/employees')
		.respond(200, [{
							"id" : 1,
							"name" : "Lindsey",
							"surname" : "Craft",
							"department" : "MARKETING",
							"ranking" : 43
						}, {
							"id" : 2,
							"name" : "Erica",
							"surname" : "Larsen",
							"department" : "IT",
							"ranking" : 71
						}, {
							"id" : 3,
							"name" : "Ryan",
							"surname" : "Levine",
							"department" : "MARKETING",
							"ranking" : 20
						}]);
		/*jshint multistr: true */
		httpBackend.whenGET('/my-angularjs-project/company/employees/1')
				.respond(200, {
					"id" : 1,
					"name" : "Lindsey",
					"surname" : "Craft",
					"department" : "MARKETING",
					"ranking" : 43
				});		
	}));
	
	describe('EmployeesCtrl', function() {
		
		it('should have 3 employees', function() {			
			httpBackend.flush();
			expect(scope.employees.length).toBe(3);			
		});
		it('should return employee Lindsey Craft with id 1', function() {
			var e = scope.getEmployee(1);
			httpBackend.flush();
			expect(e).not.toBe(null);
			expect(e.name).toEqual('Lindsey');
			expect(e.surname).toEqual('Craft');
			expect(e.department).toEqual('MARKETING');
			expect(e.ranking).toEqual(43);
		});
	});
	
	describe('Card', function() {		
				
		it('should have 3 cards since there are 3 employees returned by our REST service', function() {
			var element = compileTpl(tpl);
			httpBackend.flush();
			expect( $(element).find('h3').length).toBe(3);
		});
		
		it('should show MARKETING department for the employee Lindsey Craft', function() {
			var element = compileTpl(tpl);
			httpBackend.flush();
			var firstBtn = $(element).find('button').first();
			$(firstBtn).click();
			httpBackend.flush();
			expect($(element).find('span').first().text()).toEqual('MARKETING');
		});
		
		it('should show the barometer value 43% for the employee Lindsey Craft', function() {
			var element = compileTpl(tpl);
			httpBackend.flush();
			var div = $(element).find('.ranking>div').first();
			expect(div.text()).toEqual('43 %');
		});
	});
});