$(document).ready(function(){
  
	
	var conjunctured = [30.264466, -97.728465];
	var pizzaPlace = [30.249238, -97.749576];
	var anotherRandomPoint = [30.260550, -97.748880];


	var mapBoxLayers = L.tileLayer('http://a.tiles.mapbox.com/v3/spencercooley.map-kqxiouyq/{z}/{x}/{y}.png', {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
	    maxZoom: 18
	});





	var map = L.map('the_map', {
		center: conjunctured, 
		layers: mapBoxLayers,
		zoom: 14,
	    maxZoom: 18
	});



	
	// //polyline
	// var directLineToFood = [conjunctured, pizzaPlace] 

	// var polyline = new L.polyline(directLineToFood);

	// polyline.addTo(map)






	// //3 point line	
	// var threePolyline = new L.polyline([conjunctured, pizzaPlace, anotherRandomPoint]);

	// map.addLayer(threePolyline)







	// //polygon

	// var polygon = new L.Polygon([conjunctured, pizzaPlace, anotherRandomPoint]);

	// map.addLayer(polygon)







	// //rectangle
	// var bounds = [conjunctured, pizzaPlace];

	// var rectangle = L.rectangle(bounds);

	// rectangle.addTo(map)





	//circle with a 400m radius around conjunctured
	var circle = new L.circle(conjunctured, 400);

	circle.addTo(map)



});
