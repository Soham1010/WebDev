function whosPaying(name) {

    var numberOfPeople = name.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = name[randomPersonPosition];

    return randomPerson + " is going to buy lunch today"

}