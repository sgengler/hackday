
var marker = new google.maps.Marker({
  	position: new google.maps.LatLng(location.location[0], location.location[1]),
  	map: map,
		title: location.name,
		icon: {
	      	path: google.maps.SymbolPath.CIRCLE,
	      	scale: 4,
	    	strokeOpacity: 0
	    }

	});

	markers.push(marker);

	var playerList = angular.element('<ul></ul>');

	angular.forEach(location.players, function(player, index){
		playerList.append('<li>' + player.nameFirst + ' ' + player.nameLast + '</li>');
	});


	var infowindow = new google.maps.InfoWindow({
	content: '<h4>' + location.name + '</h4>' + playerList.html()
});

infowindows.push(infowindow);

google.maps.event.addListener(marker, 'click', function() {
	closeInfoWindows();
    infowindow.open(map,marker);
});