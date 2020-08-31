'use strict';

var appModule = angular.module('AppModule', []);

appModule.controller('GridController', ['$scope', function($scope){
	var apps = [
	{
		id: 'about',
		name: 'About',
		description: '',
		url: 'README.html'
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
		url: 'https://gitcdn.link/cdn/stupid-genius/4ee163e4b8a9b0eb498d/raw/b2753a29e282becbd80fdc91f88e6c851963adea/advanced-beginner.html'
	},
	{
		id: 'makingANewProgram',
		name: 'Brotplot: Making a New Program',
		description: 'An article I wrote about developing my Mandelbrot plotter.',
		url: 'https://www.codeproject.com/Articles/462862/Brotplot-2-0-Making-a-New-Program'
	},
	{
		id: 'walking',
		name: 'Walking',
		description: 'I\'m a lot less impressed with this writing now, 20+ years later.  Just putting this here for historical purposes.',
		url: 'https://gitcdn.link/repo/stupid-genius/c7650149f6373461f29cbab786dfc1df/raw/d32bca6331c2255750fcd470da265bcb5024d5e7/walking.html'
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
		url: 'hypnotoad.html'
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
		url: 'https://stupid-genius.itch.io/the-woodcarver'
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
		url: 'float.html'
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
	},
	{
		id: 'resume',
		name: 'Resume',
		description: 'My work life abridged beyond the point of usefulness.',
		url: 'https://allenng.com'
	},
	{
		id: 'geneticPaper',
		name: 'Genetic Algorithms',
		description: 'Randomly Generating Well-formed Postfix Expressions.  Published in the proceedings of the 2008 Midwest Instruction and Computing Symposium.',
		url: 'https://www.micsymposium.org/mics_2008/proceedings.pdf'
	},
	{
		id: 'piracy',
		name: 'The Costs of the Digital Piracy Culture',
		description: 'A paper I wrote in college exploring the impact of digital piracy and "intellectual property".',
		url: 'https://www.pdf-archive.com/2020/04/20/the-costs-of-the-digital-piracy-culture/the-costs-of-the-digital-piracy-culture.pdf'
	},
	{
		id: 'laboratory',
		name: 'Processing.js Laboratory',
		description: 'A collection of demos implemented with Processing.js in a unified development environment.  Type `help` to get started.',
		url: 'https://apps.stupid-genius.com/ProcessingJSLab/'
	}
	].sort(function(a,b){
		return (a.name<b.name)?-1:1;
	});
	$scope.apps = apps;
}]);
