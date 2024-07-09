const socket = io();

//Checking browser support realtime location.
if (navigator.geolocation) {
  //Uses watchPosition to continuously track the user's location in real-time.
  navigator.geolocation.watchPosition((position) => {
    const { latitude, longitude } = position.coords;
    socket.emit("send-location", { latitude, longitude });
  }),
    (error) => {
      console.log(error);
    },
    {
      // Specifies options:
      // enableHighAccuracy: true: Attempts to get the most accurate location data.
      // timeout: 5000: Waits up to 5 seconds to get the location data.
      // maximumAge: 0: Ensures that the location data is not cached and is always up-to-date.

      enableHighAccuracy: true,
      timeout: 2000,
      maximumAge: 0,
    };
}

const map = L.map("map").setView([0, 0],16);

//This is the url of leaflet which will provile our locaiton
// https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "Anamuddin Ahmad",
}).addTo(map);

const markers = {};

//Established the connection
socket.on("receive-location", (data) => {

  const { id, latitude, longitude } = data;
  map.setView([latitude, longitude]);
  if (markers[id]) {
    markers[id].setLatLng([latitude, longitude]);
  } else {
    markers[id] = L.marker([latitude, longitude]).addTo(map);
  }
});


//Disconnected User to the location
socket.on('user-disconnected', (id) => {
    if (markers[id]) {
      map.removeLayer(markers[id]);
      delete markers[id];
    }
  });