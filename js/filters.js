
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
}])

.filter('byCountry', [function() {
	return function(locations) {
		var countries = {}
		var countryArray = [];

		$.each(locations, function(name, location){
			var country = location.country;
			if(!location.country) {return}
			if(!countries[country]) {
				countries[country] = 1;
			} else {
				countries[country]++;
			}
		});

		$.each(countries, function(country, count) {
			countryArray.push({
				name: country,
				count: count
			})
		});

		return countryArray;
		
	};
}])

.filter('battingAvg', [function() {
	return function(val) {
		if(!val) {
			return val;
		}
		return "." + Math.round(val * 1000);
		
	};
}])

.filter('num', function() {
    return function(input) {
      return parseFloat(input);
    }
});