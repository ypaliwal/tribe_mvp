(function() {
	'use strict';

	angular
		.module('tribe1', ['ui.router']);

	angular
		.module('tribe1')
		.config(function($stateProvider, $httpProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise('/');

			$stateProvider
			.state('landing', {
				url: '/',
				templateUrl: 'site/partials/landing.html',
				controller: 'LandingCtrl as ctrl'
			})
			.state('userPage', {
				url: '/userpage',
				templateUrl: 'site/partials/userPage.html',
				controller: 'UserPageCtrl as ctrl'
			});
		});


})();