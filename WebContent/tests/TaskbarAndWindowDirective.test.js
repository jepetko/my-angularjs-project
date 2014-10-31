describe('ui', function() {
	
	//dependency injections
	var scope, element, compile, attrs, taskBarCtrl;
	
	//testables
	var taskBar;
	
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
	
	beforeEach( inject(function($rootScope, $compile, $controller) {
		scope = $rootScope.$new();
		compile = $compile;
		taskBarCtrl = $controller('taskBarCtrl', {
			'$scope': scope
		});		
	}));
	
	describe("WindowExt Directive", function() {

		it('there should be 3 windows', function() {
			taskBar = compileTpl(tpl);
			expect($(taskBar).find('.ui-window-header').length).toBe(3);
		});

		it('window should have content Lorem Ipsum <N> and header Window <N>', function() {		
			taskBar = compileTpl(tpl);
			var i = 0;
			angular.forEach($(taskBar).find('.ui-window-content>span'), function(span) {
				expect($(span).text()).toBe('Lorem Ipsum ' + i);
				i++;
			});
		});
		
		it('taskbar should have content Window N', function() {
			taskBar = compileTpl(tpl);
			//debugger;
			console.log(scope.titles);
			var i = 0;
			angular.forEach($(taskBar).find('p li'), function(li) {
				expect($(li).text()).toBe('Window ' + i);
				i++;
			});
		});
	});	
});