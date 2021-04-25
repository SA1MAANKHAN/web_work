// APIkey  => AIzaSyDpPRKstmGFm8VJuzWN0tvbKIw2vTT8GPY

let userLocaion = {};

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (pos) {
      console.log(pos.coords.latitude);
      console.log(pos.coords.longitude);
      userLocaion.lat = pos.coords.latitude;
      userLocaion.lng = pos.coords.longitude;
    },
    function () {
      alert("You need to allow your location to use this app!");
    }
  );

function initMap() {
  // map Options
  const options = {
    center: { lat: userLocaion.lat, lng: userLocaion.lng },
    zoom: 8,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_CENTER,
    },
  };

  const map = new google.maps.Map(document.getElementById("map"), options);

  //   const marker = new google.maps.Marker({
  //     position: { lat: userLocaion.lat, lng: userLocaion.lng },
  //     map: map,
  //     // icon:
  //     //   "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
  //   });

  //   const infoWindow = new google.maps.InfoWindow({
  //     content: "<h1>Salmaans Marker </h1>",
  //   });

  //   marker.addListener("click", function () {
  //     infoWindow.open(map, marker);
  //   });

  //   take marker dynamically

  const addMarker = function (coords, iconUrl, markup) {
    console.log(coords);

    const marker = new google.maps.Marker({
      position: coords,
      map: map,
    });

    // custom Icon
    if (iconUrl) {
      //   marker.setIcon(iconUrl);
    }

    if (markup) {
      const infoWindow = new google.maps.InfoWindow({
        content: markup,
      });

      marker.addListener("click", function () {
        infoWindow.open(map, marker);
      });
    }
  };
  addMarker(userLocaion);
  addMarker(
    { lat: 30.9608149, lng: 76.5181926 },
    "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
    "<h1>Hey , wassup</h1>"
  );

  addMarker({ lat: 30.9738581, lng: 76.5141432 });
  addMarker({ lat: 30.9838581, lng: 76.5121432 });
  addMarker({ lat: 30.9938581, lng: 76.5161432 });
}

// const marker = new google.maps.Marker({
//   position: { lat: userLocaion.lat, lng: userLocaion.lng },
//   map: map,
//   // icon:
//   //   "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
// });
