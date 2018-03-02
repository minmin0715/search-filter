var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/people-list');
	$stateProvider
	.state('people-list', {
		url: '/people-list',
		templateUrl: 'templates/people-list.html'
	})
	.state('people-details', {
		url: '/people-details',
		templateUrl: 'templates/people-details.html'
	})
})

