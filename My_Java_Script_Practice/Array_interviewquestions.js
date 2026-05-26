/* What is an Array in JavaScript?

An array is a special object used to store multiple values in a single variable. */

let friuits = ["mango", "banana", "Apple"];

console.log(friuits[0]);
/* 2. Difference between Array and Object
Array	Object
Stores ordered data	Stores key-value pairs
Access using index	Access using keys
Example: [1,2,3]	Example: {name:"Pavan"} */

// let arr = [10, 20];
// let obj = {name: "Pavan"};

// Important Array Methods
// push() – Add element at end
console.log("Add element at");
let arr = [1, 2];
arr.push(3);
console.log(arr);
console.log("Remove last element");
//pop() – Remove last element
let arrpop = [1, 2, 3]
arrpop.pop();
console.log(arrpop);
console.log("Remove first element");
// shift() – Remove first element
let arrshift = [1, 2, 3]
arrshift.shift();
console.log(arrshift);

//unshift() – Add element at beginning
console.log("unshift() – Add element at beginning");
let arrunshift = [1, 2, 3]
arrunshift.unshift(0);
console.log(arrunshift);

console.log("Map ---Transfromthe data ");
//Difference between map(), filter(), and reduce()
let nums = [1, 2, 3]
let results = nums.map(n => n * 2);
console.log(results);

//filter() – Filter data

let nums1 = [1, 2, 3, 4];

let even = nums1.filter(n => n % 2 === 0);

console.log(even); // [2,4]


//reduce() – Single output value
let nums2 = [1, 2, 3];

let sum = nums2.reduce((total, n) => total + n, 0);

console.log(sum); // 6

//Difference between slice() and splice()
/*Difference Between slice() and splice() in JavaScript
Feature	slice()	splice()
slice()--Purpose	Copies part of array	Adds/removes elements
slice()---Original Array	Does NOT change	Changes original array
slice()=--Return Value	New array	Removed elements
Use Case	Extract data	Modify array
Syntax	array.slice(start, end)	array.splice(start, deleteCount, items)*/

let arr4 = [1, 2, 3, 4];

console.log(arr4.slice(1, 3)); // [2,3]
console.log(arr4); // original unchanged
let arr5 = [1, 2, 3, 4];

arr5.splice(1, 2);

console.log(arr5); // [1,4]

//remove duplicate 
let arrd = [1, 2, 2, 3, 4, 4];

let unique = [...new Set(arrd)];

console.log("remove duplicate--->" + unique); // [1,2,3,4]

//Reverse array without reverse()
let reverseArr = [1, 2, 3];
let reverse = [];

for (let i = reverseArr.length - 1; i >= 0; i--) {

    reverse.push(reverseArr[i]);
}

console.log("reverse----" + reverse)