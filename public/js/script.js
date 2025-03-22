const socket = io();

// Check if the browser supports geolocation.

if(navigator.geolocation){
    // Use watchPosition to track the users location continuously.
    navigator.geolocation.watchPosition((position)=>{
        const {latitude, longitude} =  position.coords;
        socket.emit("send-location",{ latitude, longitude});// Emit the latitude and longitude via a socket with “send-location”.
    },(error)=>{
        console.error(error); // Log any errors to the console
    },
    {
        // Set options for high accuracy, a 5-second timeout, and no caching.        
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0, //no caching no saving of data
    }
  );
}
// Initialize a map centered at coordinates (0, 0) with a zoom level of 15 using Leaflet. 
const map = L.map("map").setView([0,0], 16);
//Add OpenStreetMap tiles to the map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "Jahnavi Bohra "
}).addTo(map)

const markers = {};// Create an empty object markers.

socket.on("recieve-location", (data)=>{
    const { id, latitude, longitude} = data; // When receiving location data via the socket, extract id, latitude, and longitude, and center the map on the new coordinates.

    // If a marker for the id exists, update its position, otherwise, create a new marker at the given coordinates and add it to the map. 
    map.setView([latitude, longitude]);
    if(markers[id]){
        markers[id].setLatLang([latitude, longitude]);
    }
    else{
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }
});

// When a user disconnects, remove their marker from the map and delete it from markers.
socket.on("user-disconnected", (id)=>{
    if(markers[id]){
        map.removeLayer(markers[id]);
        delete markers[id];
    }
})






















