
angular.module('hackdayApp.controllers', [])


.controller('MainController', ['$scope', '$http', function($scope, $http) {
	$scope.currentYear = 1871;
	$scope.locations = {};

	$scope.locationType = "cityLocations";

	$scope.locationTypeName = function() {
		var locationTypes = {
			cityLocations: "City",
			countryLocations: "Country",
			stateLocations: "State",
		}

		return locationTypes[$scope.locationType];
	}

}])

.controller('HitterController', ['$scope', '$http', function($scope, $http) {



}])

.controller('PitcherController', ['$scope', '$http', function($scope, $http) {



}])