
angular.module('hackdayApp.controllers', [])


.controller('MainController', ['$scope', '$http', '$interval', function($scope, $http, $interval) {
	$scope.currentYear = 1871;
	$scope.locations = {};
	$scope.maxYear = 2014;
	$scope.locationType = "cityLocations";
	$scope.playerSort = "battingAVG";

	var yearTimer = false;

	$scope.locationTypeName = function() {
		var locationTypes = {
			cityLocations: "City",
			countryLocations: "Country",
			stateLocations: "State",
		}

		return locationTypes[$scope.locationType];
	}

	$scope.playYears = function() {
		if(yearTimer) {return;}
		yearTimer = $interval(function() {
			$scope.currentYear++;
			if($scope.currentYear == $scope.maxYear) {
				$interval.cancel(yearTimer);
				yearTimer = false;
			}
		}, 250);
	}

	$scope.pauseYears = function() {
		$interval.cancel(yearTimer);
		yearTimer = false;

	}

	$scope.setLocation = function(location) {
		$scope.activeLocation = location;
	}

}])

.controller('HitterController', ['$scope', '$http', function($scope, $http) {



}])

.controller('PitcherController', ['$scope', '$http', function($scope, $http) {



}])