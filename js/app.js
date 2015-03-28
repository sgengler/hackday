'use strict';


// Declare app level module which depends on filters, and services
var hackdayApp = angular.module('hackdayApp', [
	'hackdayApp.controllers',
	'hackdayApp.filters'
])



angular.module('hackdayApp.controllers', [])


.controller('MainController', ['$scope', '$http', function($scope, $http) {

	$scope.test = 9999;

	var players = [];
	var countries = [];

	$http.get('players.json')
		.success(function(data) {
			getPlayers(data.teams);
		})

	var getPlayers = function(teams) {
		var countryObj = {}

		angular.forEach(teams, function(team, teamKey){
			angular.forEach(team.players, function(player, playerKey){
				if(!player.birthstate && !player.birthcountry) {return;}

				players.push(player);
				var country = player.birthstate ? player.birthstate : player.birthcountry;

				if(!countryObj[country]) {
					countryObj[country] = {count: 1, players: [player]};

				} else {
					countryObj[country].count++;
					countryObj[country].players.push(player);
				}
			})
		})

		angular.forEach(countryObj, function(value, key){
			countries.push({country: key, count: value.count, players: value.players})
		});



		$scope.locations = countries;
		$scope.players = players;
		console.log(countries);
		console.log(players);


		var map, pointarray, heatmap;

		var playerLocations = [];

		var dummyLocations = 
			[
			  {
			    "location": {
			      "k": 10.4696404,
			      "D": -66.8037185
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 19.466667,
			      "D": -70.69999999999999
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 38.6106042,
			      "D": -89.52703059999999
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 10.063611,
			      "D": -69.334722
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 18.43,
			      "D": -68.97000000000003
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 30.5082551,
			      "D": -97.67889600000001
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 30.42130899999999,
			      "D": -87.2169149
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 34.9495672,
			      "D": -81.9320482
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 32.9810059,
			      "D": -80.03258670000002
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 43.69120059999999,
			      "D": -79.34166379999999
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 25.7616798,
			      "D": -80.19179020000001
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 26.7153424,
			      "D": -80.05337459999998
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 36.1626638,
			      "D": -86.78160159999999
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 29.2972247,
			      "D": -110.33088140000001
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 34.8957957,
			      "D": -117.01728259999999
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 40.8175985,
			      "D": -73.00010680000003
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 33.9401088,
			      "D": -118.13315929999999
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 40.6781784,
			      "D": -73.9441579
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 42.3600825,
			      "D": -71.05888010000001
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 18.466667,
			      "D": -69.94999999999999
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 40.9312099,
			      "D": -73.89874689999999
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 34.7464809,
			      "D": -92.28959479999997
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 25.7616798,
			      "D": -80.19179020000001
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 18.416667,
			      "D": -70.03333300000003
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 34.227617,
			      "D": -118.44242500000001
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 22.6272784,
			      "D": 120.30143529999998
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 33.8352932,
			      "D": -117.91450359999999
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 30.1658207,
			      "D": -95.46126249999998
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 38.67851570000001,
			      "D": -121.77329709999998
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 26.0112014,
			      "D": -80.14949009999998
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 41.394817,
			      "D": -73.4540111
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 41.308274,
			      "D": -72.92788350000001
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 38.0405837,
			      "D": -84.50371640000003
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 40.79676670000001,
			      "D": -74.4815438
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 18.466667,
			      "D": -69.94999999999999
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 30.9913064,
			      "D": -83.3726575
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 18.4204876,
			      "D": -66.4866733
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 44.6334544,
			      "D": -121.12948719999997
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 32.735687,
			      "D": -97.10806559999997
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 29.6516344,
			      "D": -82.32482619999996
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 33.8352932,
			      "D": -117.91450359999999
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 33.5228885,
			      "D": -85.34467280000001
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 34.7514893,
			      "D": -95.0480162
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 34.0522342,
			      "D": -118.2436849
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 42.2625932,
			      "D": -71.8022934
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 27.9014133,
			      "D": -81.58590989999999
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 34.5008311,
			      "D": -117.18587589999998
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 19.2080704,
			      "D": -69.3324518
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 33.7948364,
			      "D": -83.71322900000001
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 18.29,
			      "D": -70.32999999999998
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 32.3668052,
			      "D": -86.29996890000001
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 28.5383355,
			      "D": -81.37923649999999
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 40.9222589,
			      "D": -89.48620249999999
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 41.719978,
			      "D": -87.74795280000001
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 41.2523634,
			      "D": -95.99798829999997
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 34.033625,
			      "D": -117.04308650000002
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 34.0522342,
			      "D": -118.2436849
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 40.1261743,
			      "D": -82.92906959999999
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 38.7864569,
			      "D": -84.36965939999999
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 19.58,
			      "D": -70.99000000000001
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 19.7807686,
			      "D": -70.68710909999999
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 25.8575963,
			      "D": -80.27810569999997
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 20.3844902,
			      "D": -76.6412712
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 28.0222435,
			      "D": -81.73285670000001
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 47.6062095,
			      "D": -122.3320708
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 41.8008642,
			      "D": -87.93700519999999
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 10.1579312,
			      "D": -67.99721039999997
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 20.8911111,
			      "D": -156.5047222
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 18.466667,
			      "D": -69.94999999999999
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 34.2284312,
			      "D": -92.0031955
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 44.9537029,
			      "D": -93.08995779999998
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 39.81858829999999,
			      "D": -84.0484601
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 28.5383355,
			      "D": -81.37923649999999
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 39.0997265,
			      "D": -94.57856670000001
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 20.136667,
			      "D": -75.213889
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 26.007765,
			      "D": -80.29625550000003
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 11.402349,
			      "D": -85.68457799999999
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 29.7604267,
			      "D": -95.3698028
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 27.8005828,
			      "D": -97.39638100000002
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 35.7795897,
			      "D": -78.63817870000003
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 27.950575,
			      "D": -82.45717760000002
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 32.4609764,
			      "D": -84.98770939999997
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 33.9533487,
			      "D": -117.3961564
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 39.4667034,
			      "D": -87.41390919999998
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 36.3302284,
			      "D": -119.2920585
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 40.7214251,
			      "D": -89.27286270000002
			    },
			    "weight": 1
			  },
			  {
			    "location": {
			      "k": 33.95260200000001,
			      "D": -84.5499327
			    },
			    "weight": 1
			  }
			]

		for (var i = 0; i < dummyLocations.length; i++) {
			var randomWeight = Math.floor(Math.random() + 1);
			var player = dummyLocations[i];
			playerLocations.push({location: new google.maps.LatLng(player.location.k, player.location.D), weight: randomWeight});
		};

		var geocoder;

		var mapStyles = [
		    {"featureType": "landscape","stylers": [{"visibility": "off"}]},
		    {"featureType": "poi","stylers": [{"visibility": "off"}]},
		    {"featureType": "road.highway","stylers": [{"visibility": "off"}]},
		    {"featureType": "road.arterial","stylers": [{"visibility": "off"}]},
		    {"featureType": "road.local","stylers": [{"visibility": "off"}]},
		    {"featureType": "transit","stylers": [{"visibility": "off"}]},
		    {"featureType": "administrative.province","elementType": "labels.text","stylers": [{"visibility": "off"}]},
		    {"featureType": "administrative.locality","stylers": [{"visibility": "off"}]},
		    {"featureType": "water","elementType": "labels","stylers": [{"visibility": "on"},{"lightness": -25},{"saturation": -100}]},
		    {"featureType": "water","elementType": "geometry","stylers": [{"hue": "#ffff00"},{"lightness": -25},{"saturation": -97}]}
		]


		function codeAddress(address, index, callback) {
			geocoder.geocode( { 'address': address}, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					callback(results[0].geometry.location, index);
				} else {
					console.log('Over Limit');
				}
			});
		}


		$scope.locationCoords = [];

		function initialize() {

			var gradient = [
				'rgba(0, 255, 255, 0)',
				'rgba(209, 84, 63, 0.25)',
				'rgba(209, 84, 63, 0.3)',
				'rgba(209, 84, 63, 0.35)',
				'rgba(209, 84, 63, 0.4)',
				'rgba(209, 84, 63, 0.45)',
				'rgba(209, 84, 63, 0.5)',
				'rgba(209, 84, 63, 0.55)',
				'rgba(209, 84, 63, 0.65)',
				'rgba(209, 84, 63, 0.7)',
				'rgba(209, 84, 63, 0.75)',
				'rgba(209, 84, 63, 0.8)',
				'rgba(209, 84, 63, 0.85)',
				'rgba(209, 84, 63, 0.9)',
				'rgba(209, 84, 63, 0.95)',
				'rgba(209, 84, 63, 1)'
			]

			var mapOptions = {
				zoom: 4,
				center: new google.maps.LatLng(31.50, -98.35),
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				styles: mapStyles
			};

			map = new google.maps.Map(document.getElementById('map-canvas'),
					mapOptions);

			geocoder = new google.maps.Geocoder();



			var pointArray = new google.maps.MVCArray(playerLocations);

			heatmap = new google.maps.visualization.HeatmapLayer({
				data: pointArray,
				radius: 20,
				opacity: 1,
				gradient: gradient
			});

			heatmap.setMap(map);

			var markers = [];

			for (var i = 0; i < players.length; i++) {
				var player = players[i];
				if(!isLocationFree(markers, player)) {
					continue;
				}
				markers.push(player);
				// var marker = new google.maps.Marker({
				// 	map: map,
				// 	position: new google.maps.LatLng(player.lat, player.lng),
				// 	title: "Philadelphia, PA",
				// });

		      	// google.maps.event.addListener(marker, 'click', function() {
		      	//     $('#location').text(marker.title);
		      	// });
			};

			var playerLocs = playerLocations;

			var timer = 0;

		
			var loadMorePlayers = function(num) {
				setTimeout(function() {
					for (var i = (num*10); i < ((num*10)+10); i++) {

						// if(!players[i].birthstate && !players[i].birthcountry) {continue;}

						var birthplace = '';
						if(players[i].birthcity) {
							birthplace += players[i].birthcity;
						}
						if(players[i].birthstate) {
							birthplace += ', ' + players[i].birthstate;
						}
						if(players[i].birthcountry) {
							birthplace += ', ' + players[i].birthcountry;
						}

						codeAddress(birthplace, i, function(location, index){
							var newLoc = {location: new google.maps.LatLng(location.lat(), location.lng()), weight: 1};
							$scope.locationCoords.push(newLoc);
							console.log($scope.locationCoords);
							console.log(playerLocs);
							playerLocs.push(newLoc);
							var newLocs = new google.maps.MVCArray(playerLocs);
							heatmap.setData(newLocs);
							$scope.players[index].location = {
								lat: location.lat(),
								lng: location.lng()
							}

							
						});
					};
				}, num * 2000);
			}

			// for (var i = 0; i < 40; i++) {
			// 	loadMorePlayers(i);
			// };
			
		}

		function isLocationFree(markers, player) {
			for (var i = 0, l = markers.length; i < l; i++) {
				if (player.lat === markers[i].lat && player.lng === markers[i].lng) {
				return false;
				}
			}
			return true;
		}

		function toggleHeatmap() {
			heatmap.setMap(heatmap.getMap() ? null : map);
		}

		function changeGradient() {
			var gradient = [
				'rgba(0, 255, 255, 0)',
				'rgba(0, 255, 255, 1)',
				'rgba(0, 191, 255, 1)',
				'rgba(0, 127, 255, 1)',
				'rgba(0, 63, 255, 1)',
				'rgba(0, 0, 255, 1)',
				'rgba(0, 0, 223, 1)',
				'rgba(0, 0, 191, 1)',
				'rgba(0, 0, 159, 1)',
				'rgba(0, 0, 127, 1)',
				'rgba(63, 0, 91, 1)',
				'rgba(127, 0, 63, 1)',
				'rgba(191, 0, 31, 1)',
				'rgba(255, 0, 0, 1)'
			]
			heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
		}

		function changeRadius() {
			heatmap.set('radius', heatmap.get('radius') ? null : 20);
		}

		function changeOpacity() {
			heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
		}

		google.maps.event.addDomListener(window, 'load', initialize);
		initialize();
	}


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





