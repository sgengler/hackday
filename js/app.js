'use strict';


// Declare app level module which depends on filters, and services
var hackdayApp = angular.module('hackdayApp', [
	'ui.router',
	'ngAnimate',
	'ui.slider',
	'hackdayApp.controllers',
	'hackdayApp.filters',
	'hackdayApp.directives'
])

.config(function($stateProvider, $urlRouterProvider) {
	//
	// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise("/");
	//
	// Now set up the states
	$stateProvider
		.state('hitting', {
			url: "/",
			templateUrl: "templates/batting.html",
			controller: "MainController"
		})
		.state('pitching', {
			url: "/list",
			templateUrl: "templates/pitching.html",
			controller: "MainController"
		})
		.state('hometown', {
			url: "/hometown",
			templateUrl: "templates/hometown.html",
			controller: "MainController"
		});
});


