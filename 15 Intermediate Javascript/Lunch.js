function whosPaying(name) {

    var numberOfPeople = name.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = name[randomPersonPosition];

    return randomPerson + " is going to buy lunch today!";
}


const name_s = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]

var person = whosPaying(name_s)
console.log(person)