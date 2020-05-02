'use strict';

var lookupModule = angular.module('LookupModule', []);

// location.search switch to unicode
lookupModule.controller('LookupController', ['$scope', function($scope){
	var table = [];
	for(var i=1; i<=256; ++i){
		table.push({
			ascii: i,
			character: String.fromCharCode(i)
		});
	}
	$scope.codes = table;
	$scope.transCode = function(index){
		var x = index % 8;
		var y = Math.floor(index / 8);
		return (x*32)+y;
	};
	$scope.checkKey = function(e){
		console.log(e.which);
		angular.element(document.getElementsByClassName('pressed')).removeClass('pressed');
		angular.element(document.getElementById(e.which)).addClass('pressed');
		e.preventDefault();
	};
}]);
