'use strict';

var appModule = angular.module('AppModule', []);

appModule.controller('GridController', ['$scope', function($scope){
	var apps = [
	{
		id: 'readme',
		name: 'About',
		description: '',
		url: 'README.html'
	},
	{
		id: 'privacy',
		name: 'Privacy',
		description: '',
		url: 'privacy.html'
	},
	{
		id: 'boxmodel',
		name: 'CSS Box Model',
		description: 'Demonstration document exploring the basics of the CSS Box Model.  Make sure to read the page source.',
		url: 'https://gitcdn.link/cdn/stupid-genius/ae76bd6e93cdaaf9faafbf02e0fcaceb/raw/888cd2017d99fe24e0883de95a6913818e0ef930/boxmodel.html'
	},
	{
		id: 'complex',
		name: 'Complex Numbers',
		description: 'A short article on the sufficiency of complex numbers, created in LaTeX.',
		url: 'https://www.pdf-archive.com/2020/05/03/complex/complex.pdf'
	},
	{
		id: 'template',
		name: 'Generic paper template',
		description: 'A generic paper style guide.  Includes print media stylesheet.',
		url: 'template.html'
	},
	{
		id: 'javascriptdemo',
		name: 'Advanced Beginner JavaScript',
		description: 'Demonstration of some advanced concepts from beginner-level JavaScript.  Prototypical inheritence and object construction.',
		url: 'jsdemo.html'
	},
	{
		id: 'makingANewProgram',
		name: 'Brotplot: Making a New Program',
		description: 'An article I wrote about developing my Mandelbrot plotter.',
		url: 'https://www.codeproject.com/Articles/462862/Brotplot-2-0-Making-a-New-Program'
	},
	{
		id: 'lens',
		name: 'Lens effect',
		description: 'A cool lens effect implemented in Processing.js.',
		url: 'https://jsfiddle.net/stupid_genius/nmHL7/latest/'
	},
	{
		id: 'particles',
		name: 'Particles',
		description: 'A particle system implmented in Processing.js.',
		url: 'https://jsfiddle.net/stupid_genius/4SQwT/'
	},
	{
		id: 'chaosgame',
		name: 'Chaos Game',
		description: 'Barnsley\'s "Chaos Game" implemented in Processing.js. (https://www.youtube.com/watch?v=fUsePzlOmxw)',
		url: 'https://jsfiddle.net/stupid_genius/45g6oj40/latest/'
	},
	{
		id: 'fire',
		name: 'Fire',
		description: 'A vagely fire-like effect implemented in Processing.js.',
		url: 'https://jsfiddle.net/stupid_genius/wvvh7b6L/9/'
	},
	{
		id: 'walking',
		name: 'Walking',
		description: 'I\'m a lot less impressed with this writing now, 20+ years later.  Just putting this here for historical purposes.',
		url: 'https://stupid-genius.com/walking.html'
	},
	{
		id: 'lookuptables',
		name: 'Lookup Tables',
		description: 'Lookup tables for ASCII, Unicode, etc.',
		url: 'lookup.html'
	},
	{
		id: 'hypnotoad',
		name: 'Hypnotoad',
		description: 'All hail the HYPNOTOAD!',
		url: ''
	},
	{
		id: 'brotplot',
		name: 'Brotplot',
		description: 'An elegant and unique Mandlebrot plotter.',
		url: 'https://apps.stupid-genius.com/Brotplot'
	},
	{
		id: 'quoteng',
		name: 'QuoteNg',
		description: 'A minimalist UI featuring a collection of thoughts that resonate with me.',
		url: 'https://apps.stupid-genius.com/Quotes'
	},
	{
		id: 'truthtable',
		name: 'Truth Table Generator',
		description: 'A truth table generator.',
		url: 'https://apps.stupid-genius.com/TruthTable'
	},
	{
		id: 'jsci',
		name: 'JS Compiler Interpreter',
		description: 'An LL(1) grammar parser capable of parsing any grammar it is given.',
		url: 'https://apps.stupid-genius.com/jsci'
	},
	{
		id: 'asteroids',
		name: 'Super Space Rocks',
		description: 'A father-daughter recreation of the SMASH hit "Asteroids!"  Written in C++, using a custom engine.',
		url: 'https://stupid-genius.itch.io/'
	},
	{
		id: 'woodcarver',
		name: 'The Woodcarver',
		description: 'A father-daughter submission to the 2014 Indie Game Maker Contest.  Based on story and characters by Rodger Hanson.',
		url: 'https://stupid-genius.itch.io/'
	},
	{
		id: 'mathtutor',
		name: 'Math Tutor',
		description: 'Simple, and effective arithmetic drills covering integers, fractions, decimals, and exponents.  Also provides randomized, printable worksheets (with answer key).',
		url: 'MathTutor'
	},
	{
		id: 'smashpc',
		name: 'Smash PC',
		description: 'Is this really going to happen?  I\'d buy that for a dollar!',
		url: 'https://stupid-genius.itch.io/'
	},
	{
		id: 'float',
		name: 'Floating point precision visualizer',
		description: 'We all float down here.',
		url: ''
	},
	{
		id: 'webterminal',
		name: 'Web Terminal',
		description: 'Stupid Genius CLI',
		url: 'https://www.stupid-genius.com'
	},
	{
		id: 'source',
		name: 'Source',
		description: 'Stupid Genius source code',
		url: 'https://github.com/stupid-genius'
	}
	].sort(function(a,b){
		return (a.name<b.name)?-1:1;
	});
	$scope.apps = apps;
}]);
