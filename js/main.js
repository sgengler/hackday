// $.get('batting.json')
// 	.success(function(data) {
// 		parsePlayers(data);
// 	});

var playerData = {};
var locationData;
var yearlyData = {};
var count = 0;
var geocoder;
geocoder = new google.maps.Geocoder();

var coordData = {}

// $.get('data/locations.json')
// 	.success(function(data) {
// 		locationData = data;
// 		parseLocations(data);
// 	});

// $.get('data/playerCoords.json')
// 	.success(function(data) {
// 		console.log('got coords');
// 		coordData = data;
// 		getYears();
// 	});

// $.get('batting.json')
// 	.success(function(data) {
// 		parsePlayers(data);
// 	});


function getYears() {
	console.log('getting years');
	$.get('data/yearlyData.json')
		.success(function(data) {
			yearlyData = data;
			console.log('got years');
			addCoords(coordData, yearlyData);
		})
		.fail(function( jqXHR, textStatus ) {
		  	alert( "Request failed: " + textStatus );
		});
}

function addCoords(coords, years) {
	// console.log(coords);
	// console.log(years);

	$.each(years, function(year, players){
		$.each(players, function(index, player){
			var birthplace = getBirthplace(player);
			if(birthplace) {
				yearlyData[year][index].birthplace = birthplace;
				if(coords[player.birthCountry][birthplace]) {
					yearlyData[year][index].location = coords[player.birthCountry][birthplace];
				}
			}
		});
	});

	console.log(yearlyData);
}

function parsePlayers(data) {
	$.each(data, function(index, player) {
		var year = player.yearID;
		if(!playerData.hasOwnProperty(year)) {
			playerData[year] = [];
		} 
		playerData[year].push(player);
	});

	console.log(playerData);

	$.each(data, function(index, player){
		if(!player.birthCountry || !player.birthCity) {return;}

		var birthplace = '';
		if(player.birthCity) {
			birthplace += player.birthCity;
		}
		if(player.birthState) {
			birthplace += ', ' + player.birthState;
		}
		if(player.birthCountry) {
			birthplace += ', ' + player.birthCountry;
		}
		if(!locationData.hasOwnProperty(player.birthCountry)) {
			locationData[player.birthCountry] = [];
		} 
		if(locationData[player.birthCountry].indexOf(birthplace) == -1) {
			locationData[player.birthCountry].push(birthplace);
			count++;
		}
		
	})

	// console.log(locationData);
	// console.log(count);

}

function getBirthplace(player) {
	if(!player.birthCountry || !player.birthCity) {return false;}

	var birthplace = '';
	if(player.birthCity) {
		birthplace += player.birthCity;
	}
	if(player.birthState && (player.birthCountry == 'USA' || player.birthCountry == 'CAN')) {
		birthplace += ', ' + player.birthState;
	}
	if(player.birthCountry) {
		birthplace += ', ' + player.birthCountry;
	}

	return birthplace;
}


var savedCoords;
var unsavedLocations = {}

function parseLocations(data) {
	//console.log(data);
	// for (var i = 882; i < 3000; i++) {
	// 	loadMorePlayers(i);
	// };

	$.get('data/playerCoords.json')
		.success(function(coords) {
			savedCoords = coords;
			//console.log(locationData);
			$.each(locationData, function(countryIndex, country){
				if(!savedCoords.hasOwnProperty(countryIndex)) {
					savedCoords[countryIndex] = [];
				}
				if(!unsavedLocations.hasOwnProperty(countryIndex)) {
					unsavedLocations[countryIndex] = [];
				}
				$.each(country, function(index, value){
					if(!savedCoords[countryIndex][value]) {
						unsavedLocations[countryIndex].push(value);
					}
				});
			});
			console.log(unsavedLocations);
			var counter = 0;
			$.each(unsavedLocations, function(index, value){
				if(unsavedLocations[index].length > 0) {
					//console.log(index + ': ' + unsavedLocations[index].length);
					$.each(unsavedLocations[index], function(ind, val){
						counter++;
						// console.log(counter + ', ' + index + ', ' + val + ', ' + ind);
						if(counter > 150) {return false;}
						loadMorePlayers(counter,index,val,ind);
					});
				}
			});
		})
		.fail(function( jqXHR, textStatus ) {
		  	alert( "Request failed: " + textStatus );
		});


}


function codeAddress(address, index, callback) {
	var fixedAddress = address.replace(', CAN', ', Canada');
	geocoder.geocode( { 'address': fixedAddress}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			callback(results[0].geometry.location, index, address);
		} else {
			console.log('Over Limit - ' + address);
		}
	});
}

playerCoords = {}

var loadMorePlayers = function(num, country, birth, playerIndex) {
	var timer = num;

	// for (var i = 0; i < 1000; i += 10) {
	// 	if(num > i) {
	// 		timer = num + (i*1.25);
	// 	}
	// };

	setTimeout(function() {
			var location = country;
			var birthplace = birth;

			codeAddress(birthplace, playerIndex, function(location, index, address){
				if(!playerCoords.hasOwnProperty(country)) {
					playerCoords[country] = {}
				}
				playerCoords[country][address] = [location.lat(), location.lng()];
				console.log(playerCoords);
			});

			if(num == 500) {
				console.log('complete');
			}
		
	}, timer * 1500);

}



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
];

var gradient = [
	'rgba(0, 255, 255, 0)',
	'rgba(209, 84, 63, 0.3)',
	'rgba(209, 84, 63, 0.35)',
	'rgba(209, 84, 63, 0.4)',
	'rgba(209, 84, 63, 0.45)',
	'rgba(209, 84, 63, 0.5)',
	'rgba(209, 84, 63, 0.55)',
	'rgba(209, 84, 63, 0.6)',
	'rgba(209, 84, 63, 0.65)',
	'rgba(209, 84, 63, 0.7)',
	'rgba(209, 84, 63, 0.75)',
	'rgba(209, 84, 63, 0.8)',
	'rgba(209, 84, 63, 0.85)',
	'rgba(209, 84, 63, 0.9)',
	'rgba(209, 84, 63, 0.95)',
	'rgba(209, 84, 63, 1)'
]


var map;
var playerLocations = [];
var currentLocations = [];

function initialize() {

	var mapOptions = {
		zoom: 4,
		center: new google.maps.LatLng(28.00, -95.00),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: mapStyles
	};

	map = new google.maps.Map(document.getElementById('map-canvas'),
			mapOptions);



	var pointArray = new google.maps.MVCArray([]);

	heatmap = new google.maps.visualization.HeatmapLayer({
		data: pointArray,
		radius: 20,
		opacity: 1,
		gradient: gradient
	});

	heatmap.setMap(map);

	var yearlyData2 = {};

	$.get('data/yearlyData2.json')
		.success(function(data) {
			yearlyData = data;
			var counter = 1871;

			var locationArray = {};
			var locationCountryArray = {};
			var locationStateArray = {};

			$.each(yearlyData, function(year, locations){
				locationArray[year] = [];
				locationCountryArray[year] = [];
				locationStateArray[year] = [];
				var countries = {}
				var states = {}
				$.each(locations, function(name, location){
					var nameArr = name.replace(/ /g,'').split(',');
					var city = nameArr[0];
					var country = nameArr[nameArr.length - 1];

					var locationObj = {
						name: name,
						location: location.location,
						city: city,
						country: country,
						count: location.count,
						players: location.players
					}

					if(nameArr.length == 3) {
						var state = nameArr[1];
						locationObj.state = state;
					}

					locationArray[year].push(locationObj);

					

					if(!countries[country]) {
						countries[country] = 1;
					} else {
						countries[country]++;
					}

					if(state) {
						if(!states[state]) {
							states[state] = 1;
						} else {
							states[state]++;
						}
					}
					
				});

				$.each(countries, function(country, count) {
					locationCountryArray[year].push({
						name: country,
						count: count
					})
				});

				$.each(states, function(state, count) {
					locationStateArray[year].push({
						name: state,
						count: count
					})
				});
			});

			console.log(locationArray);
			console.log(locationCountryArray);
			console.log(locationStateArray);

			// var setYears = setInterval(function() {
			// 	loadYear(counter);
			// 	counter++;
			// 	if(counter == 2015) {
			// 		clearInterval(setYears);
			// 	}
			// }, 250);
		});

	function loadYear(year){
		var locations = yearlyData[year];

		playerLocations = [];

		$.each(locations, function(index, location){

			playerLocations.push({location: new google.maps.LatLng(location.location[0], location.location[1]), weight: location.count});

			// if(player.battingAVG !== null && player.battingAVG > 0 && player.battingAVG < 0.45) {
			// 	playerLocations.push({location: new google.maps.LatLng(player.location[0], player.location[1]), weight: player.battingAVG * 10});
			// }
		});

		heatmap.setData(playerLocations);
		$('#year').text(year);
	}	
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
