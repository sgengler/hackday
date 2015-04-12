'use strict';


// Declare app level module which depends on filters, and services
var hackdayApp = angular.module('hackdayApp', [
	'hackdayApp.controllers',
	'hackdayApp.filters'
])



angular.module('hackdayApp.controllers', [])


.controller('MainController', ['$scope', '$http', function($scope, $http) {

	// $http.get('batting.json')
	// 	.success(function(data) {
	// 		getYear(data);
	// 	});

	// var playerData = {}
	// var locationData = {}

	// function getYear(data, year) {
	// 	angular.forEach(data, function(player) {
	// 		var year = player.yearID;
	// 		if(!playerData.hasOwnProperty(year)) {
	// 			playerData[year] = [];
	// 		} 
	// 		playerData[year].push(player);
	// 	});

	// 	angular.forEach(data, function(player, playerKey){
	// 		if(!player.birthCountry || !player.birthCity) {return;}

	// 		var birthplace = '';
	// 		if(player.birthCity) {
	// 			birthplace += player.birthCity;
	// 		}
	// 		if(player.birthState) {
	// 			birthplace += ', ' + player.birthState;
	// 		}
	// 		if(player.birthCountry) {
	// 			birthplace += ', ' + player.birthCountry;
	// 		}
	// 		if(!locationData.hasOwnProperty(player.birthCountry)) {
	// 			locationData[player.birthCountry] = [];
	// 		} 
	// 		if(locationData[player.birthCountry].indexOf(birthplace) == -1) {
	// 			locationData[player.birthCountry].push(birthplace);
	// 		}
			
	// 	})

	// 	console.log(locationData);

		// $.post("save_json.php", {content: playerData}, function(data) {
		// 	console.log(data);
		// }, "json");
	// }

}])

.controller('HitterController', ['$scope', '$http', function($scope, $http) {



}])

.controller('PitcherController', ['$scope', '$http', function($scope, $http) {



}])


angular.module('hackdayApp.filters', [])
.filter('orderObjectBy', [function() {
	return function(items, field, reverse) {
		var filtered = [];
		angular.forEach(items, function(item) {
			filtered.push(item);
		});
		filtered.sort(function (a, b) {
			return (a[field] > b[field] ? 1 : -1);
		});
		if(reverse) filtered.reverse();
		return filtered;
	};
}])


.filter('state', [function() {
	return function(val) {
		if(val.length !== 2) {
			return val;
		}
		var states = {"AL": "Alabama","AK": "Alaska","AS": "American Samoa","AZ": "Arizona","AR": "Arkansas","CA": "California","CO": "Colorado","CT": "Connecticut","DE": "Delaware","DC": "District Of Columbia","FM": "Federated States Of Micronesia","FL": "Florida","GA": "Georgia","GU": "Guam","HI": "Hawaii","ID": "Idaho","IL": "Illinois","IN": "Indiana","IA": "Iowa","KS": "Kansas","KY": "Kentucky","LA": "Louisiana","ME": "Maine","MH": "Marshall Islands","MD": "Maryland","MA": "Massachusetts","MI": "Michigan","MN": "Minnesota","MS": "Mississippi","MO": "Missouri","MT": "Montana","NE": "Nebraska","NV": "Nevada","NH": "New Hampshire","NJ": "New Jersey","NM": "New Mexico","NY": "New York","NC": "North Carolina","ND": "North Dakota","MP": "Northern Mariana Islands","OH": "Ohio","OK": "Oklahoma","OR": "Oregon","PW": "Palau","PA": "Pennsylvania","PR": "Puerto Rico","RI": "Rhode Island","SC": "South Carolina","SD": "South Dakota","TN": "Tennessee","TX": "Texas","UT": "Utah","VT": "Vermont","VI": "Virgin Islands","VA": "Virginia","WA": "Washington","WV": "West Virginia","WI": "Wisconsin","WY": "Wyoming"};
		var provinces = {"AB":"Alberta","BC":"British Columbia","LB":"Labrador","MB":"Manitoba","NB":"New Brunswick","NF":"Newfoundland","NS":"Nova Scotia","NU":"Nunavut","NW":"Northwest Territories","ON":"Ontario","PE":"Prince Edward Island","QC":"Quebec","SK":"Saskatchewen","YU":"Yukon"};

		if(states[val]) {
			return states[val] + ', USA';
		}
		if (provinces[val]) {
			return provinces[val] + ', Canada';
		}

		return val;
		
	};
}]);





