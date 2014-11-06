describe('shoppingbag-ctrl', function() {
	
	var rootScope, scope, controller, _BagService;
	
	beforeEach(module('shoppingbag-app'));
	
	beforeEach(inject(function($rootScope, $controller, BagService) {
		scope = $rootScope.$new();
		$controller('ShoppingBagCtrl', {
			'$scope': scope,
			'BagService' : BagService			
		});
		_BagService = BagService;
	}));
	
	describe('ShoppingBagCtrl', function() {
		it('should reflect BagService changes', function() {
			
			scope.bag["2"] = 10;
			scope.$digest();
			expect(_BagService.bag).toEqual(jasmine.objectContaining({2: 10}));		
		})
	});
});