$(document).ready(function(){
  
	
	var conjunctured = [30.264466, -97.728465]
	
	var mapBoxLayers = L.tileLayer('http://a.tiles.mapbox.com/v3/spencercooley.map-kqxiouyq/{z}/{x}/{y}.png', {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
	    maxZoom: 18
	});





	var map = L.map('the_map', {
		center: conjunctured, 
		layers: mapBoxLayers,
		zoom: 15,
	    maxZoom: 18
	});







	// simple marker
	//creates a marker and then places it on the map
	var marker = new L.Marker(conjunctured);

	marker.addTo(map)






	// // // marker with some options and features

	// //makes an icon
	// var icon = L.icon({
	// 	iconUrl: 'https://si0.twimg.com/profile_images/291512953/conjunctured_dot_bigger.png',
	// 	iconSize: [73, 73]
	// });

	

	// //marker with some options
	// var marker = new L.Marker(conjunctured, {
	// 	icon: icon,
	// 	draggable: true
	// });

	// //binds a popup window with some content to the marker
	// var theContent = '<h1><a href="http://twitter.com/spencercooley">@spencercooley</a></h1><h3>Is talking about maps right now at <a href="http://twitter.com/conjunctured">@conjunctured</a>.</h3>';

	// marker.bindPopup(theContent).openPopup();

	// marker.addTo(map)







});
