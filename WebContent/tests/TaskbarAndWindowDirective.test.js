describe('ui', function() {
	
	//dependency injections
	var rootScope, scope, element, compile, timeout, taskBarCtrl;
	
	//testables
	var taskBar;
	
	/*jshint multistr: true */
	var tpl = '<task-bar>\
		<ext-window window-title="Window 0">Lorem Ipsum 0</ext-window>\
		<ext-window window-title="Window 1">Lorem Ipsum 1</ext-window>\
		<ext-window window-title="Window 2">Lorem Ipsum 2</ext-window>\
		</task-bar>';
	
	function compileTpl(tpl) {
		var link = compile(tpl, taskBarCtrl);
		var element = link(scope);
		scope.$digest();		
		return element;
	}
	
	beforeEach(module('ui'));
	
	beforeEach( inject(function($rootScope, $compile, $controller, $timeout) {
		rootScope = $rootScope;
		scope = $rootScope.$new();
		compile = $compile;
		timeout = $timeout;
		taskBarCtrl = $controller('taskBarCtrl', {
			'$scope': scope
		});		
	}));
	
	describe("WindowExt Directive", function() {

		it('should build 3 windows when tpl has 3 <window-ext> elements', function() {
			taskBar = compileTpl(tpl);
			expect($(taskBar).find('.ui-window-header').length).toBe(3);
		});

		it('should have content Lorem Ipsum <N> and header Window <N>', function() {		
			taskBar = compileTpl(tpl);
			var i = 0;
			angular.forEach($(taskBar).find('.ui-window-content>span'), function(span) {
				expect($(span).text()).toBe('Lorem Ipsum ' + i);
				i++;
			});
		});
	});
	
	describe("TaskBar Directive", function() {
		it('should have 3 buttons', function() {
			taskBar = compileTpl(tpl);
			expect( $(taskBar).find('li').length ).toBe(3);
		});
		
		it('should have buttons with catption window N', function() {
			taskBar = compileTpl(tpl);
			var i = 0;
			angular.forEach($(taskBar).find('li'), function(li) {
				expect($(li).text()).toBe('Window ' + i);
				i++;
			});
		});		
	});
	
	describe("WindowExt and TaskBar Behaviour", function() {
		it("should remove taksBar button when the associated window is closed", function() {
			taskBar = compileTpl(tpl);
			
			//debugger;
			var firstWindow = $($(taskBar).find('.ui-window')).first();
			var firstWindowScope = angular.element(firstWindow).scope();			
			firstWindowScope.close();
			rootScope.$digest();
			expect( $(taskBar).find('li').length ).toBe(2);			
			
			//Hack: get scope of taskBar and $$childHead which is - apparently - the scope of the controller
			//_scope.$$childHead.titles = ['Window 0', 'Window 1']
//			var _scope = taskBar.scope();
//			_scope.$$childHead.$digest();			
//			expect( $(taskBar).find('li').length ).toBe(2);
		});
	});
});