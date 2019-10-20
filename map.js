var map;
var cntr = {
    lat: 47.601058,
    lng: -122.340294
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: cntr,
        zoom: 9,
        restriction: {
            latLngBounds: {
                north: 50.0,
                south: 45.0,
                west: -126.0,
                east: -116.0
            }
        }
    });

    var marker = new google.maps.Marker({
        position: { lat: 46.974968, lng: -123.791363 },
        map: map,
        title: 'Aberdeen'
    });

    var marker = new google.maps.Marker({
        position: { lat: 46.62, lng: -123.95 },
        map: map,
        title: 'Bay Center'
    });

    var marker = new google.maps.Marker({
        position: { lat: 46.28, lng: -123.94 },
        map: map,
        title: 'Chinook'
    });

    var marker = new google.maps.Marker({
        position: { lat: 46.86, lng: -124.11 },
        map: map,
        title: 'Cohassett Beach'
    });

    var marker = new google.maps.Marker({
        position: { lat: 48.33, lng: -122.34 },
        map: map,
        title: 'Conway'
    });

    var marker = new google.maps.Marker({
        position: { lat: 47.13, lng: -124.17 },
        map: map,
        title: 'Copalis Beach'
    });

    var marker = new google.maps.Marker({
        position: { lat: 48.56, lng: -122.43 },
        map: map,
        title: 'Edison'
    });

    var marker = new google.maps.Marker({
        position: { lat: 47.23, lng: -122.35 },
        map: map,
        title: 'Fife'
    });

    var marker = new google.maps.Marker({
        position: { lat: 46.82, lng: -124.0912 },
        map: map,
        title: 'Grayland'
    });

    var marker = new google.maps.Marker({
        position: { lat: 46.977989, lng: -123.885231 },
        map: map,
        title: 'Hoquiam'
    });

    var marker = new google.maps.Marker({
        position: { lat: 33.270279, lng: -79.677872 },
        map: map,
        title: 'Jamestown'
    });

    var marker = new google.maps.Marker({
        position: { lat: 46.144630, lng: -122.911407 },
        map: map,
        title: 'Kelso'
    });

    var marker = new google.maps.Marker({
        position: { lat: 48.388714, lng: -122.496277 },
        map: map,
        title: 'La Conner'
    });

    var marker = new google.maps.Marker({
        position: { lat: 46.346904, lng: -124.049920 },
        map: map,
        title: 'Long Beach'
    });

    var marker = new google.maps.Marker({
        position: { lat: 32.500706, lng: -94.740486 },
        map: map,
        title: 'Longview'
    });

    var marker = new google.maps.Marker({
        position: { lat: 48.366070, lng: -124.610497 },
        map: map,
        title: 'Neah Bay'
    });

    var marker = new google.maps.Marker({
        position: { lat: 38.331581, lng: -75.086159 },
        map: map,
        title: 'Ocean City'
    });

    var marker = new google.maps.Marker({
        position: { lat: 46.491482, lng: -124.050011 },
        map: map,
        title: 'Ocean Park'
    });

    var marker = new google.maps.Marker({
        position: { lat: 46.970110, lng: -124.159930 },
        map: map,
        title: 'Ocean Shores'
    });

    var marker = new google.maps.Marker({
        position: { lat: 47.022430, lng: -124.166410 },
        map: map,
        title: 'Oyehut'
    });

    var marker = new google.maps.Marker({
        position: { lat: 46.171250, lng: -123.377250 },
        map: map,
        title: 'Puget Island'
    });

    var marker = new google.maps.Marker({
        position: { lat: 48.202330, lng: -122.253910 },
        map: map,
        title: 'Silvana'
    });

    var marker = new google.maps.Marker({
        position: { lat: 47.327300, lng: -123.154610 },
        map: map,
        title: 'Skokomish'
    });

    var marker = new google.maps.Marker({
        position: { lat: 41.675030, lng: -86.251961 },
        map: map,
        title: 'South Bend'
    });

    var marker = new google.maps.Marker({
        position: { lat: 47.333210, lng: -124.286410 },
        map: map,
        title: 'Taholah'
    });

    var marker = new google.maps.Marker({
        position: { lat: 46.705980, lng: -123.980540 },
        map: map,
        title: 'Tokeland'
    });

    var marker = new google.maps.Marker({
        position: { lat: 41.141472, lng: -73.357903 },
        map: map,
        title: 'Westport'
    });

    var marker = new google.maps.Marker({
        position: { lat: 48.335050, lng: -122.669270 },
        map: map,
        title: 'Whidbey Island Station'
    });

    var marker = new google.maps.Marker({
        position: { lat: 46.674970, lng: -123.669450 },
        map: map,
        title: 'Willapa'
    });

    var marker = new google.maps.Marker({
        position: { lat: 38.677490, lng: -121.774719 },
        map: map,
        title: 'Woodland'
    });
}