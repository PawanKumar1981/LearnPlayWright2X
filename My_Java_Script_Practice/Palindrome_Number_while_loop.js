// Palindrome Number

let number = 121;
let reverse = 0;
let OrginalNum = number;

while (number > 0) {

    let digit = number % 10;
    reverse = reverse * 10 + digit;
    number = Math.floor(number / 10);
}

if (OrginalNum === reverse) {

    console.log("Palindrome Number");
} else {

    console.log("Not a Palindrome Number");
}