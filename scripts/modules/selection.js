/*
	Selection class.
	@data: Object that contains an elements row/col information.
	@rowsCount: maximum number of rows in the application.
*/

var $ = require('jquery');

module.exports = function(data, rowsCount){
	var selection = '';

	var neighbourRange = function(col, row){
		var str = '',
			base = '.c-'+col+'-r-',
			min = row-1,
			max = row+1;

		if (min >= 0) str += base + min + ',';
		str += base + row + ',';
		if (max < rowsCount) str += base + max;
		else str = str.replace(/,\s*$/, "");

		return str;
	};

	selection += neighbourRange(data.col-1, data.row);
	selection += neighbourRange(data.col, data.row);
	selection += neighbourRange(data.col+1, data.row);

	return selection;
};