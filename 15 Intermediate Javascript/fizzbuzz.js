// fizbuxx 3 = fizz, 5 = buzz, 3*5 = fizzbuzz
var output = [];
var count = 1;


// output.push(1);  // to the end of array
// console.log(output);

function fizzBuzz() {
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    } else if (count % 3 === 0) {
        output.push("Fizz");
    } else if (count % 5 === 0) {
        output.push("Buzz");
    } else {
        console.log(count);
    }
    count++;
    console.log(output);
}
