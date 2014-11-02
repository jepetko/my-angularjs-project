describe("products-ctrl", function() {
		
	var scope, controller, httpBackend;
		
	beforeEach(module('products-services'));
	beforeEach(module('products-ctrl'));
	
	beforeEach(inject(function($rootScope, $controller, $httpBackend, ProductsFactory) {
		scope = $rootScope.$new();
		controller = $controller('ProductsCtrl', {
			'$scope': scope,
			'ProductFactory': ProductsFactory
		});
		httpBackend = $httpBackend;
		
		httpBackend.whenGET('shop/products').respond(200,
 				[ {
			"id" : 1,
			"name" : "Margharita",
			"price" : 5.0
		}, {
			"id" : 2,
			"name" : "Cardinale",
			"price" : 6.5
		}, {
			"id" : 3,
			"name" : "Prosciuto",
			"price" : 8.5
		}, {
			"id" : 4,
			"name" : "Tonno",
			"price" : 7.5
		}, {
			"id" : 5,
			"name" : "Quattro Stagioni",
			"price" : 8.0
		}, {
			"id" : 6,
			"name" : "Familien-Pizza",
			"price" : 12.0
		} ]
		);
	}));
	
	describe('ProductCtrl', function() {
		
		it('should be able to return all products', function() {
			scope.all();
			httpBackend.flush();
			expect(scope.products.length).toBe(6);			
		});
	});
	
});
