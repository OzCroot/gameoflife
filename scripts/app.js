var $ = require('jquery');
var defaults = require('./modules/defaults.js');
var grid = require('./modules/grid.js');
var cycle = require('./modules/cycle.js');

$(function(){
	grid.createHolder(defaults.grid);
	grid.createGrid(defaults.grid);
	cycle(grid.getCells()).loop(500);
});