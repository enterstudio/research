
(function(lychee, global) {

	if (environment !== null) {
		environment.init();
	}

	lychee.ENVIRONMENTS['/libraries/lychee/dist'] = environment;

})(lychee, typeof global !== 'undefined' ? global : this);
