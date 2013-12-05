var map;

function gmap_initialize() {
	var position = new google.maps.LatLng(51.218781,3.226927);

	var mapOptions = {
		center: position,
		mapTypeControl: false,
		scrollwheel: false,
		zoom: 12,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	map = new google.maps.Map(document.getElementById("gmap"),mapOptions);

	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(51.218781,3.226927),
		map: map,
		draggable: false,
		animation: google.maps.Animation.DROP,
		flat: true,
		icon: '/assets/img/marker.png'
	});
}

$(document).ready(function ()
{
	if ($('#gmap').length > 0)
	{
		gmap_initialize();
	}
})