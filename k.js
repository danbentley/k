/*
	Javascript by @dan_bentley
*/
(function() {

	var opts = {};

	 $.fn.k = function(args, callback) {

		var defaults = {
			code: [84, 69, 83, 84], // test
			currentKey: 0,
			debug: false
		}

		opts = $.extend(defaults, args);

		// add key listener
		$(this).keyup(function(e) {
			success = checkCode(e);
			if (success) {
				callback();
			}
		});
	};

	function checkCode(e) {

		var keyPressed = e.keyCode;

		if (keyPressed == opts.code[opts.currentKey]) {

			opts.currentKey++;
			if (opts.debug) console.log('match');

		} else {

			opts.currentKey = 0;
			if (opts.debug) console.log('fail');
		}

		if (opts.currentKey == opts.code.length) {
			if (opts.debug) console.log('code matched')
			return true;
		}

		return false;
	};

})(jQuery);
