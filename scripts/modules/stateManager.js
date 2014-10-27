module.exports = (function(){
	var _private = {
		$life: null,
		$death: null
	};

	return {
		addState: function($state, $node){
			_private[$state] = (_private[$state]) ? _private[$state].add($node) : $node;
		},
		getState: function($state){
			return _private[$state];
		},
		setStates: function(){
			if (_private.$life) _private.$life.addClass('alive');
			if (_private.$death) _private.$death.removeClass('alive');
		},
		reset: function(){
			_private.$life = null;
			_private.$death = null;
		}
	}
})();