'use strict';


// Declare app level module which depends on filters, and services
var hackdayApp = angular.module('hackdayApp', [
	'hackdayApp.controllers',
	'hackdayApp.filters'
])



angular.module('hackdayApp.controllers', [])


.controller('HitterController', ['$scope', '$http', function($scope, $http) {

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
				players.push(player);
				var country = player.birthstate ? player.birthstate : player.birthcountry;

				if(!countryObj[country]) {
					countryObj[country] = 1;
				} else {
					countryObj[country]++;
				}
			})
		})

		angular.forEach(countryObj, function(value, key){
			countries.push({country: key, count: value})
		});



		$scope.locations = countries;
		$scope.players = players;
		console.log(countries);
		console.log(players);

		var map, pointarray, heatmap;

		var playerLocations = [];

		var dummyLocations = [{"lat":37.782551,"lng":-122.44536800000003},{"lat":37.782745,"lng":-122.44458600000002},{"lat":37.782842,"lng":-122.44368800000001},{"lat":37.782919,"lng":-122.442815},{"lat":37.782992,"lng":-122.44211200000001},{"lat":37.7831,"lng":-122.441461},{"lat":37.783206,"lng":-122.44082900000001},{"lat":37.783273,"lng":-122.44032400000003},{"lat":39.9525839,"lng":-75.16522150000003},{"lat":37.782551,"lng":-122.44536800000003},{"lat":37.782745,"lng":-122.44458600000002},{"lat":37.782842,"lng":-122.44368800000001},{"lat":37.782919,"lng":-122.442815},{"lat":37.782992,"lng":-122.44211200000001},{"lat":37.7831,"lng":-122.441461},{"lat":37.783206,"lng":-122.44082900000001},{"lat":37.783273,"lng":-122.44032400000003},{"lat":39.9525839,"lng":-75.16522150000003},{"lat":39.9525839,"lng":-75.16522150000003},{"lat":37.782551,"lng":-122.44536800000003},{"lat":37.782745,"lng":-122.44458600000002},{"lat":37.782842,"lng":-122.44368800000001},{"lat":37.782919,"lng":-122.442815},{"lat":37.782992,"lng":-122.44211200000001},{"lat":37.7831,"lng":-122.441461},{"lat":37.783206,"lng":-122.44082900000001},{"lat":37.783273,"lng":-122.44032400000003},{"lat":39.9525839,"lng":-75.16522150000003},{"lat":39.9525839,"lng":-75.16522150000003},{"lat":39.9525839,"lng":-75.16522150000003},{"lat":37.782551,"lng":-122.44536800000003},{"lat":37.782745,"lng":-122.44458600000002},{"lat":37.782842,"lng":-122.44368800000001},{"lat":37.782919,"lng":-122.442815},{"lat":37.782992,"lng":-122.44211200000001},{"lat":37.7831,"lng":-122.441461},{"lat":37.783206,"lng":-122.44082900000001},{"lat":37.783273,"lng":-122.44032400000003},{"lat":39.9525839,"lng":-75.16522150000003},{"lat":39.9525839,"lng":-75.16522150000003},{"lat":39.9525839,"lng":-75.16522150000003},{"lat":18.735693,"lng":-70.16265099999998},{"lat":37.782551,"lng":-122.44536800000003},{"lat":37.782745,"lng":-122.44458600000002},{"lat":37.782842,"lng":-122.44368800000001},{"lat":37.782919,"lng":-122.442815},{"lat":37.782992,"lng":-122.44211200000001},{"lat":37.7831,"lng":-122.441461},{"lat":37.783206,"lng":-122.44082900000001},{"lat":37.783273,"lng":-122.44032400000003},{"lat":39.9525839,"lng":-75.16522150000003},{"lat":39.9525839,"lng":-75.16522150000003},{"lat":39.9525839,"lng":-75.16522150000003},{"lat":18.735693,"lng":-70.16265099999998},{"lat":18.735693,"lng":-70.16265099999998},{"lat":37.782551,"lng":-122.44536800000003},{"lat":37.782745,"lng":-122.44458600000002},{"lat":37.782842,"lng":-122.44368800000001},{"lat":37.782919,"lng":-122.442815},{"lat":37.782992,"lng":-122.44211200000001},{"lat":37.7831,"lng":-122.441461},{"lat":37.783206,"lng":-122.44082900000001},{"lat":37.783273,"lng":-122.44032400000003},{"lat":39.9525839,"lng":-75.16522150000003},{"lat":39.9525839,"lng":-75.16522150000003},{"lat":39.9525839,"lng":-75.16522150000003},{"lat":18.735693,"lng":-70.16265099999998},{"lat":18.735693,"lng":-70.16265099999998},{"lat":18.735693,"lng":-70.16265099999998},{"lat":37.782551,"lng":-122.44536800000003},{"lat":37.782745,"lng":-122.44458600000002},{"lat":37.782842,"lng":-122.44368800000001},{"lat":37.782919,"lng":-122.442815},{"lat":37.782992,"lng":-122.44211200000001},{"lat":37.7831,"lng":-122.441461},{"lat":37.783206,"lng":-122.44082900000001},{"lat":37.783273,"lng":-122.44032400000003},{"lat":39.9525839,"lng":-75.16522150000003},{"lat":39.9525839,"lng":-75.16522150000003},{"lat":39.9525839,"lng":-75.16522150000003},{"lat":18.735693,"lng":-70.16265099999998},{"lat":18.735693,"lng":-70.16265099999998},{"lat":18.735693,"lng":-70.16265099999998},{"lat":23.159167,"lng":-82.27105599999999},{"lat":37.782551,"lng":-122.44536800000003},{"lat":37.782745,"lng":-122.44458600000002},{"lat":37.782842,"lng":-122.44368800000001},{"lat":37.782919,"lng":-122.442815},{"lat":37.782992,"lng":-122.44211200000001},{"lat":37.7831,"lng":-122.441461},{"lat":37.783206,"lng":-122.44082900000001},{"lat":37.783273,"lng":-122.44032400000003},{"lat":39.9525839,"lng":-75.16522150000003},{"lat":39.9525839,"lng":-75.16522150000003},{"lat":39.9525839,"lng":-75.16522150000003},{"lat":18.735693,"lng":-70.16265099999998},{"lat":18.735693,"lng":-70.16265099999998},{"lat":18.735693,"lng":-70.16265099999998},{"lat":23.159167,"lng":-82.27105599999999},{"lat":23.159167,"lng":-82.27105599999999},{"lat":37.782551,"lng":-122.44536800000003},{"lat":37.782745,"lng":-122.44458600000002},{"lat":37.782842,"lng":-122.44368800000001},{"lat":37.782919,"lng":-122.442815},{"lat":37.782992,"lng":-122.44211200000001},{"lat":37.7831,"lng":-122.441461},{"lat":37.783206,"lng":-122.44082900000001},{"lat":37.783273,"lng":-122.44032400000003},{"lat":39.9525839,"lng":-75.16522150000003},{"lat":39.9525839,"lng":-75.16522150000003},{"lat":39.9525839,"lng":-75.16522150000003},{"lat":18.735693,"lng":-70.16265099999998},{"lat":18.735693,"lng":-70.16265099999998},{"lat":18.735693,"lng":-70.16265099999998},{"lat":23.159167,"lng":-82.27105599999999},{"lat":23.159167,"lng":-82.27105599999999},{"lat":40.7127837,"lng":-74.00594130000002},{"lat":37.782551,"lng":-122.44536800000003},{"lat":37.782745,"lng":-122.44458600000002},{"lat":37.782842,"lng":-122.44368800000001},{"lat":37.782919,"lng":-122.442815},{"lat":37.782992,"lng":-122.44211200000001},{"lat":37.7831,"lng":-122.441461},{"lat":37.783206,"lng":-122.44082900000001},{"lat":37.783273,"lng":-122.44032400000003},{"lat":39.9525839,"lng":-75.16522150000003},{"lat":39.9525839,"lng":-75.16522150000003},{"lat":39.9525839,"lng":-75.16522150000003},{"lat":18.735693,"lng":-70.16265099999998},{"lat":18.735693,"lng":-70.16265099999998},{"lat":18.735693,"lng":-70.16265099999998},{"lat":23.159167,"lng":-82.27105599999999},{"lat":23.159167,"lng":-82.27105599999999},{"lat":40.7127837,"lng":-74.00594130000002},{"lat":40.7127837,"lng":-74.00594130000002},{"lat":37.782551,"lng":-122.44536800000003},{"lat":37.782745,"lng":-122.44458600000002},{"lat":37.782842,"lng":-122.44368800000001},{"lat":37.782919,"lng":-122.442815},{"lat":37.782992,"lng":-122.44211200000001},{"lat":37.7831,"lng":-122.441461},{"lat":37.783206,"lng":-122.44082900000001},{"lat":37.783273,"lng":-122.44032400000003},{"lat":39.9525839,"lng":-75.16522150000003},{"lat":39.9525839,"lng":-75.16522150000003},{"lat":39.9525839,"lng":-75.16522150000003},{"lat":18.735693,"lng":-70.16265099999998},{"lat":18.735693,"lng":-70.16265099999998},{"lat":18.735693,"lng":-70.16265099999998},{"lat":23.159167,"lng":-82.27105599999999},{"lat":23.159167,"lng":-82.27105599999999},{"lat":40.7127837,"lng":-74.00594130000002},{"lat":40.7127837,"lng":-74.00594130000002},{"lat":40.7127837,"lng":-74.00594130000002}];


		for (var i = 0; i < dummyLocations.length; i++) {
			var player = dummyLocations[i];
			playerLocations.push(new google.maps.LatLng(player.lat, player.lng));
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


		function codeAddress(address, callback) {
			geocoder.geocode( { 'address': address}, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					callback(results[0].geometry.location);
				} else {
					alert('Geocode was not successful for the following reason: ' + status);
				}
			});
		}


		function initialize() {
			var mapOptions = {
				zoom: 4,
				center: new google.maps.LatLng(30.50, -98.35),
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
				opacity: 1
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
	}


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

		return states[val] + ', USA';
	};
}]);




