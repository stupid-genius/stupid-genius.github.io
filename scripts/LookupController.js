'use strict';

var lookupModule = angular.module('LookupModule', []);

var type = 'ascii';
var begin = 1;
var end = 256;

var params = new URLSearchParams(window.location.search);
for(var param of params.entries()){
	switch(param[0]){
		case 'type':
			type = param[1];
			break;
		case 'index':
			begin = +param[1];
			end = begin+255;
			break;
	}
}

// location.search switch to unicode
lookupModule.controller('LookupController', ['$scope', function($scope){

	switch(type){
		case 'unicode':
			$scope.codes = unicodeTable();
			break;
		case 'ascii':
		default:
			$scope.codes = asciiTable();
			break;
	}
	$scope.type = type;
	$scope.transCode = function(index){
		var x = index % 8;
		var y = Math.floor(index / 8);
		var res = (x*32)+y;
		return (x*32)+y;
	};
	$scope.checkKey = function(e){
		angular.element(document.getElementsByClassName('pressed')).removeClass('pressed');
		angular.element(document.getElementById(e.which)).addClass('pressed');
		e.preventDefault();
	};
}]);

function asciiTable(){
	var table = []
	for(var i=1; i<=256; ++i){
		table.push({
			ascii: i,
			character: String.fromCharCode(i)
		});
	}
	return table;
}
function unicodeTable(){
	var table = [];
	for(var i=begin; i<=end; ++i){
		table.push({
			ascii: i,
			character: String.fromCharCode(d2h(i))
		});
	}
	return table;
}
function d2h(d){
	return parseInt(Number(d).toString(16), 16);
}
function h2d(h){
	return +Number(h).toString(10);
}
