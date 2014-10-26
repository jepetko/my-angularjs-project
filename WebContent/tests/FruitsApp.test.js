describe('FruitsApp', function () {
	var scope,
	controller;
    beforeEach(function () {
        module('FruitsApp');
    });

    describe('FruitsController', function () {
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('FruitsCtrl', {
                '$scope': scope
            });
        }));
        it('is empty at the beginning', function () {
            expect(scope.selectedFruits.length).toBe(0);
        });
        /*
        describe('select all', function() {
        	it('adds all fruits to selectedFruits', function() {
        		scope.select('all');
        		scope.$digest();
        		expect(scope.selectedFruits.length).toBe(5);
        	});
        });*/
    });
});