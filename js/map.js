// Initialize and add the map
function initMap() {

  // The location of tinyStompers
  var vanSolutions = {lat: 53.783418, lng: -1.579818};

  // Map options
  var options = {
    zoom: 14,
    center: vanSolutions,
    // styles: [{
    //   "stylers": [{
    //       "saturation": -100
    //   }, {
    //       "gamma": 1
    //   }]
    // }]
  }

  // The map, centered at vanSolutions
  var map = new google.maps.Map(
      document.getElementById('map'), options);

  // // The icon
  // var icon = {
  //   url: "./img/tiny-stompers-logo-pin.png", // url
  //   scaledSize: new google.maps.Size(40, 40), // scaled size
// };

  // The marker, positioned at tinyStompers
  var marker = new google.maps.Marker({
    position: vanSolutions, 
    map: map,
    // icon: icon,
  });


   
}