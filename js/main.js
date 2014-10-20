$(function(){
	var $wrapper = $("#wrapper");
	var size = 5;
	var cols = 20;
	var rows = 20;
	var border = 0;
	var $holder = $('<div id="holder" />');
	var cells = [];
	var $cells;

	$wrapper.append($holder);

	$holder.width(cols * size).height(rows * size).css({'margin-top': 0 - $holder.height() / 2, 'margin-left': 0 - $holder.width() / 2});

	for (var col = 0; col < cols; col++) {
		for (var row = 0; row < rows; row++) {
			var $i = $('<i />')
				.addClass('c-'+col + '-r-'+row)
				.css({
					left: size * row,
					top: size * col,
					width: size,
					height: size,
					borderWidth: border
				}).data({
					row: row,
					col: col
				});

			cells.push($i);
		}
	}

	$holder.append(cells);
	$cells = $holder.children();
	$holder.find("i:nth-child(-n+4)").addClass('alive');


	window.cycle = function(){
		var $kill = null;
		var $birth = null;

		$cells.each(function(){
			var $this = $(this),
				selection = '';

			// Previous row.
			var before = '.c-'+($this.data('col')-1)+'-r-';
			selection += before + ($this.data('row')-1)+',';
			selection += before + $this.data('row')+',';
			selection += before + ($this.data('row')+1)+',';

			// Current row.
			var current = '.c-'+$this.data('col')+'-r-';
			selection += current + ($this.data('row')-1)+',';
			selection += current + ($this.data('row')+1)+',';

			// After row.
			var after = '.c-'+($this.data('col')+1)+'-r-';
			selection += after + ($this.data('row')-1)+',';
			selection += after + $this.data('row')+',';
			selection += after + ($this.data('row')+1);

			var $neighbours = $holder.find(selection);
			var $aliveNeighbours = $neighbours.filter('.alive');
			// var $emptyNeighbours = $neighbours.filter(':not(.alive)');

			// Death due to isolation or overcrowding.
			if ($aliveNeighbours.length <= 1 || $aliveNeighbours.length >= 4) {
				$kill = ($kill) ? $kill.add($this) : $this;
			}
			else {
				$birth = ($birth) ? $birth.add($this) : $this;
			}
		});

		$kill.removeClass('alive');
		$birth.addClass('alive');
	};

	var lifeCycle = setInterval(cycle, 100);
});