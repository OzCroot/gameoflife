var $ = require('jquery');
var selection = require('./selection.js');
var stateManager = require('./stateManager.js');

module.exports = function($cells, rules){
	var _private = {
		lifeInterval: null,
		iterator: function(){
			for (var i = $cells.length - 1; i >= 0; i--) {
				var $cell = $($cells[i]),
					$neighbours = $(selection($cell.data())),
					$aliveNeighbours = $neighbours.filter('.alive');

				// Cell is alive.
				if ($cell.hasClass('alive')) {
					if ($aliveNeighbours.length <= rules.POPULATION_UNDER || $aliveNeighbours.length >= rules.POPULATION_OVER) {
						stateManager.addState('$death', $cell);
					}
				}
				else {
					if ($aliveNeighbours.length >= rules.POPULATION_BIRTH) {
						stateManager.addState('$life', $cell);
					}
				}
			}

			stateManager.setStates();
			stateManager.reset();
		}
	};

	return {
		loop: function(duration){
			_private.lifeInterval = setInterval(_private.iterator, duration);
		},
		stop: function(){
			clearInterval(_private.lifeInterval);
		}
	}
};