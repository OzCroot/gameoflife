/*
	Selection class.
	@data: Object that contains an elements row/col information.
	@rowsCount: maximum number of rows in the application.
*/

var $ = require('jquery');

module.exports = function(data){
	var selection = '';

	var neighbourRange = function(col, row){
		var str = '',
			base = '.c-'+col+'-r-',
			min = row-1,
			max = row+1;

		str += base + min + ',';
		str += base + row + ',';
		str += base + max + ',';

		return str;
	};

	selection += neighbourRange(data.col-1, data.row);
	selection += neighbourRange(data.col, data.row);
	selection += neighbourRange(data.col+1, data.row);

	// Remove trailing ',' from selection string.
	selection = selection.substr(0, selection.length - 1);

	return selection;
};