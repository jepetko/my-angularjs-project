describe('ui-simple-windows', function() {
	var scope, element, compile;
	
	function compileTpl(tpl, windowTitle) {
		tpl = '<window window-title="' + (windowTitle || 'info') + '">' + tpl + '</window>';		
		element = compile(tpl)(scope);		
		scope.$digest();
	}
	
	beforeEach(module('ui-simple-windows'));
	
	describe('WindowDirective', function() {
		
		beforeEach(inject(function($rootScope, $compile) {
			scope = $rootScope.$new();		
			compile = $compile;			
		}));
		
		it('should contain Lorem Ipsum', function() {
			compileTpl('Lorem Ipsum');
			expect( $(element).find('.ui-window-content>span').text()).toBe('Lorem Ipsum');
		});
		
		it('should have title info', function() {
			compileTpl('Lorem Ipsum');
			expect( $(element).find('.ui-window-header>span').text()).toBe('info');			
		});
		
		it('should contain Lorem Ipsum Domine', function() {
			compileTpl('Lorem Ipsum Domine', 'warning');			
			expect( $(element).find('.ui-window-content>span').text()).toBe('Lorem Ipsum Domine');
		});	
		
		it('should have title warning', function() {
			compileTpl('Lorem Ipsum Domine', 'warning');
			expect( $(element).find('.ui-window-header>span').text()).toBe('warning');
		});

		it('should be closeable', function() {
			compileTpl('Closeable Window');
			element.isolateScope().close();
			expect( $(element).css('display') ).toBe('none');
		});
	});	
});