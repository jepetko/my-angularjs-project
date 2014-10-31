describe('http-services', function() {
	
	var scope, http, httpBackend;
	var dataGrabberCtrl;
	
	beforeEach(module('http-services'));
	
	beforeEach(inject(function($rootScope, $controller, $http, $httpBackend) {
		
		scope = $rootScope.$new();
		http = $http;
		httpBackend = $httpBackend;
				
		dataGrabberCtrl = $controller('DataGrabberCtrl', {
			'$scope': scope,
			'$http': http
		});
		httpBackend.when('GET', '/my-angularjs-project/greet/greeting').respond({"greeting": "hello"});
		httpBackend.when('GET', '/this/is/bad/url').respond(404, '');

	}));
	
	afterEach(function() {	     
		httpBackend.verifyNoOutstandingExpectation();	    
		httpBackend.verifyNoOutstandingRequest();
	});	
	
	describe('DataGraberCtrl', function() {
		
		it('should be success when proper URL is configured', function() {
			scope.url = '/my-angularjs-project/greet/greeting';
			scope.load();
			httpBackend.flush();
			expect(scope.data).toEqual({"greeting":"hello"});
			expect(scope.status).toEqual('success');
		});
		
		
		it('should be error when proper URL is configured', function() {
			scope.url = '/this/is/bad/url';
			scope.load();
			httpBackend.flush();
			expect(scope.data).toEqual("no data");
			expect(scope.status).toEqual('error');
		});
		
	});
	
});