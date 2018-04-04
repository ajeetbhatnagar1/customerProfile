var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'ProfileController',
		templateUrl: 'views/customers.html'
	})
	.when('/customer', {
		controller:'ProfileController',
		templateUrl: 'views/customers.html'
	})
	.when('/customer/details/:id',{
		controller:'ProfileController',
		templateUrl: 'views/profile_details.html'
	})
	.when('/customer/add',{
		controller:'ProfileController',
		templateUrl: 'views/add_profile.html'
	})
	.when('/customer/edit/:id',{
		controller:'ProfileController',
		templateUrl: 'views/edit_profile.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});