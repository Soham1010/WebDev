var guessList = ["Angela", "John", "Mary", "Joseph", "Helen"];\

var guestName = prompt("Whats your name?");

if (guessList.includes(guestName)) {
    alert("Welcome");
} else {
    alert("Sorry, maybe next time");
}