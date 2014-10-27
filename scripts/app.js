var $ = require('jquery');
var grid = require('./modules/grid.js');
var cycle = require('./modules/cycle.js');
var defaults = require('./modules/defaults.js');

$(function(){
	grid.createHolder(defaults.grid);
	grid.createGrid(defaults.grid);
	cycle(grid.getCells(), defaults.rules).loop(defaults.loop);
});