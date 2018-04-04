var myApp = angular.module('myApp');

myApp.controller('ProfileController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('ProfileController loaded...');

	$scope.getProfiles = function(){
		$http.get('/api/profile').success(function(response){
			$scope.customers = response;
		});
	}

	$scope.getProfile = function(){
		var id = $routeParams.id;
		$http.get('/api/profile/'+id).success(function(response){
			$scope.customer = response;
		});
	}

	$scope.addProfile = function(){
		console.log($scope.customer);
		$http.post('/api/profile/', $scope.customer).success(function(response){
			window.location.href='#/profile';
		});
	}

	$scope.updateProfile = function(){
		var id = $routeParams.id;
		$http.put('/api/profile/'+id, $scope.customer).success(function(response){
			window.location.href='#/profile';
		});
	}

	$scope.removeProfile = function(id){
		$http.delete('/api/profile/'+id).success(function(response){
			window.location.href='#/profile';
		});
	}
}]);