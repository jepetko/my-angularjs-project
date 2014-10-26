"use strict";

describe("Counter", function() {
	it("returns correct results for add", function() {
		var num1 = 1;
		var num2 = 9;
		var expected = 10;
		
		var result = counter.add(num1, num2);
		expect(result).toBe(expected);
	});
});