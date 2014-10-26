"use strict";

var counter = (function() {
	var add = function(num1,num2) {
		return num1 + num2;
	};
	
	var subtract = function(num1, num2) {
		return num1 - num2;
	};
	
	return {
		add: add,
		subtract: subtract
	};
}());
