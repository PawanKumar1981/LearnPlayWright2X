
// Write a program that classifies a triangle based on its side lengths. Given three input values representing the lengths of the sides, determine if the triangle is equilateral (all sides are equal), 
// isosceles (exactly two sides are equal), or scalene (no sides are equal).
//  Use an if-else statement to classify the triangle.

let side_A = 10;
let side_B = 10;
let side_C = 10;

if (side_A === side_B && side_B === side_C) {

    console.log("equilateral");

} else if (side_A === side_B || side_B === side_C || side_C === side_A) {

    console.log("isosceles");
} else {

    console.log("scalene");
}






