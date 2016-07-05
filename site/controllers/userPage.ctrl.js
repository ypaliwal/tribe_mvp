(function() {
	'use strict';

	angular
		.module('tribe1')
		.controller('UserPageCtrl', UserPageCtrl);

	function UserPageCtrl() {
		var userVm = this;

		// public functions
		console.log("User page and UserPageCtrl loaded!");


	}
})();