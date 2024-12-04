var inp = prompt("Enter name: ");

// 
var fw = inp.slice(0,1).toUpperCase();
var rest = inp.slice(1,inp.length  + 1).toLowerCase();

alert("Hello there! " + fw + rest);
