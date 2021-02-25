function initMap() {
	// add your code here
	L.mapquest.key = 'R2WgtOrDFXPsKoaBbyVIYmBxTnLqtu7j';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
  		center: [32.88, -117.246],
  		layers: L.mapquest.tileLayer('map'),
  		zoom: 12,
		zoomControl: false
	});

	// Add a marker to the map
	L.marker([32.88073802809082, -117.23627204348655]).addTo(map);
}