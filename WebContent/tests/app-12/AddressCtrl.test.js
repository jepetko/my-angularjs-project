describe('address-app', function() {
	
	var rootScope, scope, httpBackend, element;
		
	beforeEach(module('address-app'));	
	beforeEach(module('templates/address.html'));
	
	beforeEach(inject(function($rootScope, $controller, $compile, $templateCache) {
		template = $templateCache.get('templates/address.html');
		var link = $compile(template);
		element = link($rootScope.$new());
		scope = angular.element(element).scope();
	}));
	
	describe('AddressCtrl', function() {		
		it('should be not dirty at the beginning', function() {					
			expect(scope.addressForm).toBeDefined();
			expect(scope.addressForm.$dirty).toBe(false);
		});
		
		it('should be dirty after the input value has been changed', function() {
			scope.addressForm.surname.$setViewValue('Golbang');
			scope.$digest();			
			expect(scope.addressForm.$dirty).toBe(true);			
		});
		
		it('should be invalid when the values are not complete', function() {
			scope.addressForm.surname.$setViewValue('Golbang');
			scope.$digest();			
			expect(scope.addressForm.$invalid).toBe(true);						
		});
		
		it('should be valid when the values are complete', function() {
			var address = {firstname : 'Katarina', surname: 'Golbang', street: 'Some Street', no: 3, zip: '1020', city: 'Vienna', payment: 'Cash'};
			angular.forEach(address, function(val,key) {
				scope.addressForm[key].$setViewValue(val);
			});
			scope.$digest();			
			expect(scope.addressForm.$invalid).toBe(false);						
		});
		
		it('should show validity hint when value is inserted', function() {
			scope.addressForm.firstname.$setViewValue('Katarina');
			scope.$digest();
			var hint = $(element).find('span').first();
			expect(hint.css('display')).not.toBe('none');
		});
	});	
});