'use strict';

angular.module( 'hackdayApp.directives', [ ] )


.directive( 'compileHtml', [
'$compile',
function( $compile ) {
return {
	restrict: 'A',
	link: function( scope, element, attrs ) {
		scope.$watch( attrs.compileHtml, function( newValue ) {
			element.html( newValue );
			$compile( element.contents( ) )( scope );
		} );
	}
}; } ] )


.directive( 'googleMap', [

function(  ) {
return {
	restrict: 'A',
	scope: false,
	link: function( scope, element, attrs ) {
		
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


		var map,
			heatmap,
			playerLocations = [],
			currentLocations = [],
			cityData,
			countryData,
			stateData,
			firstLoad = true;

		scope.activeLocation = false;

		scope.$watch('activeLocation', function(val){
			if(!val) {return}
			console.log(val);
			var center = new google.maps.LatLng(val.location[0], val.location[1]);
			map.setCenter(center);
			map.setZoom(8);
		})



		var initialize = function() {

			var mapOptions = {
				zoom: 4,
				center: new google.maps.LatLng(28.00, -95.00),
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				styles: mapStyles
			};

			map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);

			var pointArray = new google.maps.MVCArray([]);

			heatmap = new google.maps.visualization.HeatmapLayer({
				data: pointArray,
				radius: 20,
				opacity: 1,
				gradient: gradient
			});

			heatmap.setMap(map);

			$.get('data/yearlyDatabyCountry.json')
				.success(function(data) {
					countryData = data;
				});	

			$.get('data/yearlyDatabyState.json')
				.success(function(data) {
					stateData = data;
				});	

			$.get('data/yearlyDatabyCity.json')
				.success(function(data) {
					cityData = data;
					loadYear(scope.currentYear);
				});	
		}

		var loadYear = function(year){
			if(!cityData) {return}

			var locations = cityData[year];
			playerLocations = [];

			$.each(locations, function(index, location){
				playerLocations.push({location: new google.maps.LatLng(location.location[0], location.location[1]), weight: location.count});
			});

			scope.cityLocations = locations;
			scope.currentYear = year;
			heatmap.setData(playerLocations);
			if(countryData[year]) {
				scope.countryLocations = countryData[year];
			}
			if(countryData[year]) {
				scope.stateLocations = stateData[year];
			}

			if(firstLoad) {
				scope.$apply();
				firstLoad = false;
			}
		}

		scope.$watch('currentYear', function(val){
			loadYear(val);
		})

		google.maps.event.addDomListener(window, 'load', initialize);
		initialize();


	}
}; } ] )