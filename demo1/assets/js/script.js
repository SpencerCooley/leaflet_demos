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


});
