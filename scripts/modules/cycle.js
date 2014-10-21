var $ = require('jquery');
var selection = require('./selection.js');
var defaults = require('./defaults.js');

module.exports = function($cells, duration){
	var _private = {
		lifeInterval: null,
		iterator: function(){
			var $life,$death;

			for (var i = $cells.length - 1; i >= 0; i--) {
				var $cell = $($cells[i]),
					$neighbours = $(selection($cell.data())),
					$aliveNeighbours = $neighbours.filter('.alive');

				if ($aliveNeighbours.length <= defaults.rules.POPULATION_UNDER || $aliveNeighbours.length >= defaults.rules.POPULATION_OVER) {
					$death = ($death) ? $death.add($cell) : $cell;
				}
				else {
					$life = ($life) ? $life.add($cell) : $cell;
				}
			};

			if ($death) $death.removeClass('alive');
			if ($life) $life.addClass('alive');
		}
	};

	return {
		loop: function(duration){
			_private.lifeInterval = setInterval(_private.iterator, duration);
		}
	}
};