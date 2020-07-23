'use strict';

var floatModule = angular.module('FloatModule', []);
floatModule.controller('FloatController', ['$scope', function($scope){
	var chartData = [];
	$('#chart').highcharts({
		chart: {
			type: 'scatter',
			zoomType: 'xy',
			height: '66%'
		},
		title: {
			text: 'Floating Point Precision Visualizer'
		},
		xAxis: {
			
		},
		yAxis: {
			type: 'logarithmic'
		},
		series: [{
			name: 'Floats',
			data: chartData
		}]
	});
	var hc = $('#chart').highcharts();

	var term = $('#terminal').terminal({
		show: function(num){
			var bits = showBits(num);
			plot();
			return bits;
		},
		make: function(neg, exp, frac){
			var bits = makeBits(neg, exp, frac);
			plot();
			return bits;
		},
		reset: function(){
			chartData = [];
			plot();
		}
	},{
		prompt: '> ',
		greetings: ''
	});

	var buffer = new ArrayBuffer(8);
	var view = new DataView(buffer);

	function showBits(num){
		view.setFloat64(0, num);
		//console.log('show float', view.getFloat64(0), decodeFloat64(view), Number.isSafeInteger(num));
		//display(parseFloat64(view));
		//term.echo(view.getFloat64(0), parseFloat64(view));
		return parseFloat64(view);
	}
	function makeBits(neg, exp, frac){
		createFloat64(view, neg, exp, frac);
		//console.log('make float', view.getFloat64(0), decodeFloat64(view), Number.isSafeInteger(view.getFloat64(0)));
		//display(parseFloat64(view));
		//term.echo(view.getFloat64(0));
		//term.echo(parseFloat64(view));
		return parseFloat64(view);
	}
	function display(){
		term.echo(parseFloat64(view));
		chartData.push([chartData.length, view.getFloat64(0)]);
	}
	function plot(){
		hc.series[0].setData(chartData);
	}

	function decodeFloat64(view){
		var bin = getWordBits(view, 0)+getWordBits(view, 4);
		//console.log(bin);
		var parsed = [];
		parsed.push(parseInt(bin.substring(0, 1), 2) === 0 ? '+' : '-');	// negative
		var exponent = parseInt(bin.substring(1, 12), 2)-1023;
		parsed.push(exponent);												// exponent
		parsed.push(parseInt(bin.substring(12), 2));						// fraction
		if(exponent<0){
			parsed.push(0);													// integer
			parsed.push(parseInt('1'+bin.substring(12), 2));				// decimal
		}else{
			parsed.push(parseInt('1'+bin.substring(12, exponent+12), 2));	// integer
			parsed.push(parseInt(bin.substring(exponent+12), 2));			// decimal
		}
		//parsed.push(parseInt(bin.substring(32), 2));						// second word
		return parsed.join(' ');
	}
	function parseFloat64(view){
		var bin = getWordBits(view, 0)+getWordBits(view, 4);
		var parsed = [];
		parsed.push(bin.substring(0, 1));
		parsed.push(bin.substring(1, 12));
		parsed.push(bin.substring(12));
		return parsed.join(' ');
	}
	function createFloat64(view, neg, exp, frac){
		var isNeg = neg?'1':'0';
		var exponent = (exp+1023).toString(2).padStart(11, '0');
		var fraction = frac.toString(2).padStart(52, '0');
		var bitField = (isNeg+exponent+fraction).padEnd(64, '0');
		view.setUint32(0, parseInt(bitField.substring(0, 32), 2));
		view.setUint32(4, parseInt(bitField.substring(32), 2));
		//console.log(isNeg, exponent, fraction.toString(2));
		//console.log(bitField);
		//console.log(parseInt(bitField.substring(32), 2), bitField.substring(32));
		//console.log(view.getUint32(4), getWordBits(view, 4));
	}
	function getWordBits(view, b){
		return view.getUint32(b).toString(2).padStart(32, '0');
	}
	function show(num){
		showBits(num);
		term.echo('show bits '+view.getFloat64(0)+' '+decodeFloat64(view));
		display();
	}
	function make(n, e, f){
		makeBits(n, e, f);
		term.echo('make bits '+view.getFloat64(0)+' '+decodeFloat64(view));
		display();
	}

	// 16777215 max 32-bit
	// 9007199254740991 max 64-bit
	// 4503599627370495 max fraction (52-bit)

	//for(var i=9007199254740000; i<=9007199254740991; ++i){
	for(var i=0; i<=308; ++i){
		var num = 3/Math.pow(10, i);
		//show(i);
	}

	for(var i=0; i<100; ++i){
		//make(0, 0, i);
	}

	for(var i=308; i>=0; --i){
		//make(0, i, 1);
	}
	for(var i=0; i<308; ++i){
		//make(0, -i, 1);
	}

	for(var i=4503599627370000; i<=4503599627370495; ++i){
		//make(0, 1, i);
	}

	/*
		make bits 3.9999999999999982 + 1 4503599627370492 3 2251799813685244
		0 10000000000 1111111111111111111111111111111111111111111111111100
		make bits 3.9999999999999987 + 1 4503599627370493 3 2251799813685245
		0 10000000000 1111111111111111111111111111111111111111111111111101
	 */
	show(3.9999999999999982);
	show(3.9999999999999983);
	show(3.9999999999999984);
	show(3.9999999999999985);
	show(3.9999999999999986);
	show(3.9999999999999987);

/*
	show(Number.MIN_VALUE);
	make(0, -1023, 1);

	show(Number.MAX_VALUE);
	make(0, 1023, 4503599627370495);

	show(3.141592653589793);
	make(0, 1, 2570638124657944);

	show(0.3);
	make(0, -2, 900719925474099);
	make(0, -2, 844424930131968);
	show(1/3);
*/
	plot();
}]);
