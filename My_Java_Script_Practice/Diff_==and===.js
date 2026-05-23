// Difference between “ == “ and “ === “ operators.

var x = 2;
var y = "2";
// (x == y)  // Returns true since the value of both x and y is the same
// (x === y) // Returns false since the typeof x is "number" and typeof y is "string"
// Loose Equality
console.log("Using == operator");
console.log(x == y);

// Strict Equality
console.log("Using === operator");
console.log(x === y);