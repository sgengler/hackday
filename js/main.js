// Adding 500 Data Points
var map, pointarray, heatmap;

var playerLocations = [];

var players = [
	{
		"lat":37.782551,
		"lng":-122.44536800000003},
	{
		"lat":37.782745,
		"lng":-122.44458600000002},
	{
		"lat":37.782842,
		"lng":-122.44368800000001},
	{
		"lat":37.782919,
		"lng":-122.442815},
	{
		"lat":37.782992,
		"lng":-122.44211200000001},
	{
		"lat":37.7831,
		"lng":-122.441461},
	{
		"lat":37.783206,
		"lng":-122.44082900000001},
	{
		"lat":37.783273,
		"lng":-122.44032400000003},
	{
		"lat":39.9525839,
		"lng":-75.16522150000003},
	{
		"lat":37.782551,
		"lng":-122.44536800000003},
	{
		"lat":37.782745,
		"lng":-122.44458600000002},
	{
		"lat":37.782842,
		"lng":-122.44368800000001},
	{
		"lat":37.782919,
		"lng":-122.442815},
	{
		"lat":37.782992,
		"lng":-122.44211200000001},
	{
		"lat":37.7831,
		"lng":-122.441461},
	{
		"lat":37.783206,
		"lng":-122.44082900000001},
	{
		"lat":37.783273,
		"lng":-122.44032400000003},
	{
		"lat":39.9525839,
		"lng":-75.16522150000003},
	{
		"lat":39.9525839,
		"lng":-75.16522150000003},
	{
		"lat":37.782551,
		"lng":-122.44536800000003},
	{
		"lat":37.782745,
		"lng":-122.44458600000002},
	{
		"lat":37.782842,
		"lng":-122.44368800000001},
	{
		"lat":37.782919,
		"lng":-122.442815},
	{
		"lat":37.782992,
		"lng":-122.44211200000001},
	{
		"lat":37.7831,
		"lng":-122.441461},
	{
		"lat":37.783206,
		"lng":-122.44082900000001},
	{
		"lat":37.783273,
		"lng":-122.44032400000003},
	{
		"lat":39.9525839,
		"lng":-75.16522150000003},
	{
		"lat":39.9525839,
		"lng":-75.16522150000003},
	{
		"lat":39.9525839,
		"lng":-75.16522150000003},
	{
		"lat":37.782551,
		"lng":-122.44536800000003},
	{
		"lat":37.782745,
		"lng":-122.44458600000002},
	{
		"lat":37.782842,
		"lng":-122.44368800000001},
	{
		"lat":37.782919,
		"lng":-122.442815},
	{
		"lat":37.782992,
		"lng":-122.44211200000001},
	{
		"lat":37.7831,
		"lng":-122.441461},
	{
		"lat":37.783206,
		"lng":-122.44082900000001},
	{
		"lat":37.783273,
		"lng":-122.44032400000003},
	{
		"lat":39.9525839,
		"lng":-75.16522150000003},
	{
		"lat":39.9525839,
		"lng":-75.16522150000003},
	{
		"lat":39.9525839,
		"lng":-75.16522150000003},
	{
		"lat":18.735693,
		"lng":-70.16265099999998},
	{
		"lat":37.782551,
		"lng":-122.44536800000003},
	{
		"lat":37.782745,
		"lng":-122.44458600000002},
	{
		"lat":37.782842,
		"lng":-122.44368800000001},
	{
		"lat":37.782919,
		"lng":-122.442815},
	{
		"lat":37.782992,
		"lng":-122.44211200000001},
	{
		"lat":37.7831,
		"lng":-122.441461},
	{
		"lat":37.783206,
		"lng":-122.44082900000001},
	{
		"lat":37.783273,
		"lng":-122.44032400000003},
	{
		"lat":39.9525839,
		"lng":-75.16522150000003},
	{
		"lat":39.9525839,
		"lng":-75.16522150000003},
	{
		"lat":39.9525839,
		"lng":-75.16522150000003},
	{
		"lat":18.735693,
		"lng":-70.16265099999998},
	{
		"lat":18.735693,
		"lng":-70.16265099999998},
	{
		"lat":37.782551,
		"lng":-122.44536800000003},
	{
		"lat":37.782745,
		"lng":-122.44458600000002},
	{
		"lat":37.782842,
		"lng":-122.44368800000001},
	{
		"lat":37.782919,
		"lng":-122.442815},
	{
		"lat":37.782992,
		"lng":-122.44211200000001},
	{
		"lat":37.7831,
		"lng":-122.441461},
	{
		"lat":37.783206,
		"lng":-122.44082900000001},
	{
		"lat":37.783273,
		"lng":-122.44032400000003},
	{
		"lat":39.9525839,
		"lng":-75.16522150000003},
	{
		"lat":39.9525839,
		"lng":-75.16522150000003},
	{
		"lat":39.9525839,
		"lng":-75.16522150000003},
	{
		"lat":18.735693,
		"lng":-70.16265099999998},
	{
		"lat":18.735693,
		"lng":-70.16265099999998},
	{
		"lat":18.735693,
		"lng":-70.16265099999998},
	{
		"lat":37.782551,
		"lng":-122.44536800000003},
	{
		"lat":37.782745,
		"lng":-122.44458600000002},
	{
		"lat":37.782842,
		"lng":-122.44368800000001},
	{
		"lat":37.782919,
		"lng":-122.442815},
	{
		"lat":37.782992,
		"lng":-122.44211200000001},
	{
		"lat":37.7831,
		"lng":-122.441461},
	{
		"lat":37.783206,
		"lng":-122.44082900000001},
	{
		"lat":37.783273,
		"lng":-122.44032400000003},
	{
		"lat":39.9525839,
		"lng":-75.16522150000003},
	{
		"lat":39.9525839,
		"lng":-75.16522150000003},
	{
		"lat":39.9525839,
		"lng":-75.16522150000003},
	{
		"lat":18.735693,
		"lng":-70.16265099999998},
	{
		"lat":18.735693,
		"lng":-70.16265099999998},
	{
		"lat":18.735693,
		"lng":-70.16265099999998},
	{
		"lat":23.159167,
		"lng":-82.27105599999999},
	{
		"lat":37.782551,
		"lng":-122.44536800000003},
	{
		"lat":37.782745,
		"lng":-122.44458600000002},
	{
		"lat":37.782842,
		"lng":-122.44368800000001},
	{
		"lat":37.782919,
		"lng":-122.442815},
	{
		"lat":37.782992,
		"lng":-122.44211200000001},
	{
		"lat":37.7831,
		"lng":-122.441461},
	{
		"lat":37.783206,
		"lng":-122.44082900000001},
	{
		"lat":37.783273,
		"lng":-122.44032400000003},
	{
		"lat":39.9525839,
		"lng":-75.16522150000003},
	{
		"lat":39.9525839,
		"lng":-75.16522150000003},
	{
		"lat":39.9525839,
		"lng":-75.16522150000003},
	{
		"lat":18.735693,
		"lng":-70.16265099999998},
	{
		"lat":18.735693,
		"lng":-70.16265099999998},
	{
		"lat":18.735693,
		"lng":-70.16265099999998},
	{
		"lat":23.159167,
		"lng":-82.27105599999999},
	{
		"lat":23.159167,
		"lng":-82.27105599999999},
	{
		"lat":37.782551,
		"lng":-122.44536800000003},
	{
		"lat":37.782745,
		"lng":-122.44458600000002},
	{
		"lat":37.782842,
		"lng":-122.44368800000001},
	{
		"lat":37.782919,
		"lng":-122.442815},
	{
		"lat":37.782992,
		"lng":-122.44211200000001},
	{
		"lat":37.7831,
		"lng":-122.441461},
	{
		"lat":37.783206,
		"lng":-122.44082900000001},
	{
		"lat":37.783273,
		"lng":-122.44032400000003},
	{
		"lat":39.9525839,
		"lng":-75.16522150000003},
	{
		"lat":39.9525839,
		"lng":-75.16522150000003},
	{
		"lat":39.9525839,
		"lng":-75.16522150000003},
	{
		"lat":18.735693,
		"lng":-70.16265099999998},
	{
		"lat":18.735693,
		"lng":-70.16265099999998},
	{
		"lat":18.735693,
		"lng":-70.16265099999998},
	{
		"lat":23.159167,
		"lng":-82.27105599999999},
	{
		"lat":23.159167,
		"lng":-82.27105599999999},
	{
		"lat":40.7127837,
		"lng":-74.00594130000002},
	{
		"lat":37.782551,
		"lng":-122.44536800000003},
	{
		"lat":37.782745,
		"lng":-122.44458600000002},
	{
		"lat":37.782842,
		"lng":-122.44368800000001},
	{
		"lat":37.782919,
		"lng":-122.442815},
	{
		"lat":37.782992,
		"lng":-122.44211200000001},
	{
		"lat":37.7831,
		"lng":-122.441461},
	{
		"lat":37.783206,
		"lng":-122.44082900000001},
	{
		"lat":37.783273,
		"lng":-122.44032400000003},
	{
		"lat":39.9525839,
		"lng":-75.16522150000003},
	{
		"lat":39.9525839,
		"lng":-75.16522150000003},
	{
		"lat":39.9525839,
		"lng":-75.16522150000003},
	{
		"lat":18.735693,
		"lng":-70.16265099999998},
	{
		"lat":18.735693,
		"lng":-70.16265099999998},
	{
		"lat":18.735693,
		"lng":-70.16265099999998},
	{
		"lat":23.159167,
		"lng":-82.27105599999999},
	{
		"lat":23.159167,
		"lng":-82.27105599999999},
	{
		"lat":40.7127837,
		"lng":-74.00594130000002},
	{
		"lat":40.7127837,
		"lng":-74.00594130000002},
	{
		"lat":37.782551,
		"lng":-122.44536800000003},
	{
		"lat":37.782745,
		"lng":-122.44458600000002},
	{
		"lat":37.782842,
		"lng":-122.44368800000001},
	{
		"lat":37.782919,
		"lng":-122.442815},
	{
		"lat":37.782992,
		"lng":-122.44211200000001},
	{
		"lat":37.7831,
		"lng":-122.441461},
	{
		"lat":37.783206,
		"lng":-122.44082900000001},
	{
		"lat":37.783273,
		"lng":-122.44032400000003},
	{
		"lat":39.9525839,
		"lng":-75.16522150000003},
	{
		"lat":39.9525839,
		"lng":-75.16522150000003},
	{
		"lat":39.9525839,
		"lng":-75.16522150000003},
	{
		"lat":18.735693,
		"lng":-70.16265099999998},
	{
		"lat":18.735693,
		"lng":-70.16265099999998},
	{
		"lat":18.735693,
		"lng":-70.16265099999998},
	{
		"lat":23.159167,
		"lng":-82.27105599999999},
	{
		"lat":23.159167,
		"lng":-82.27105599999999},
	{
		"lat":40.7127837,
		"lng":-74.00594130000002},
	{
		"lat":40.7127837,
		"lng":-74.00594130000002},
	{
		"lat":40.7127837,
		"lng":-74.00594130000002}
];


for (var i = 0; i < players.length; i++) {
	var player = players[i];
	playerLocations.push(new google.maps.LatLng(player.lat, player.lng));
};

var locations = [

];

var geocoder;

var mapStyles = [
    {
        "featureType": "landscape",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    }
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

      	google.maps.event.addListener(marker, 'click', function() {
      	    $('#location').text(marker.title);
      	});
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