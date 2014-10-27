var $ = require('jquery');

module.exports = (function(){
	var _private = {
		$holder: null,
		$cells: null
	};

	return {
		getHolder: function(){
			return _private.$holder;
		},

		getCells: function(){
			return _private.$cells;
		},

		createHolder: function(grid){
			_private.$holder = $('<div id="holder" />');

			// Create our parent element and append it to the body.
			$("body").append(_private.$holder.css({
				width: grid.size * grid.cols,
				height: grid.size * grid.rows,
				borderWidth: grid.border
			}).css({
				marginTop: (0 - _private.$holder.height() / 2),
				marginLeft: (0 - _private.$holder.width() / 2)
			}));
		},

		createGrid: function(grid){
			for (var col = 0; col < grid.cols; col++) {
				for (var row = 0; row < grid.rows; row++) {
					var $i = $('<i />')
						.addClass('c-'+col + '-r-'+row)
						.css({
							left: grid.size * col,
							top: grid.size * row,
							width: grid.size,
							height: grid.size,
							borderWidth: grid.border
						}).data({
							row: row,
							col: col
						});
					_private.$cells = (_private.$cells) ? _private.$cells.add($i) : $i;
				}
			}

			_private.$holder.append(_private.$cells);
			_private.$holder.find("i:nth-child(-n+15)").addClass('alive');
		}
	}
})();