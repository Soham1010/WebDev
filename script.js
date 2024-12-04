function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice")


( function morning() {
    console.log("Good, Morning!");
})();



var variable1 = document.getElementById("paraID");

function getLocation() {
    navigator.geolocation.getCurrentPosition(showLoc);
}
function showLoc(pos) {
    variable1.innerHTML = "Longitude: " + pos.coords.longitude
}


