// Creating an array
let fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits[0]); // Output: Apple

// Adding elements to an array
fruits.push("Orange");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Orange"]

// Removing the last element from an array
fruits.pop();
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

 

// Finding an element in an array
let index = fruits.indexOf("Banana");
console.log(index); // Output: 1

// Including an element in an array
let isInArray = fruits.includes("Banana");
console.log(isInArray); // Output: true


// Removing an element by index
fruits.splice(index, 1);
console.log(fruits); // Output: ["Apple", "Cherry"]