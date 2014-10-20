$(function(){
	var $wrapper = $("#wrapper");
	var size = 20;
	var cols = 40;
	var rows = 40;
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
					height: size
				}).data({
					row: row,
					col: col
				});

			cells.push($i);
		}
	}

	$holder.append(cells);
	$cells = $holder.children();

	$holder.on('click', 'i', function(){
		var $this = $(this).addClass('active'),
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

		$cells.removeClass('neighbour');
		$holder.find(selection).addClass('neighbour');
	});
});