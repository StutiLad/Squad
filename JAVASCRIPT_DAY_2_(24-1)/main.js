"use strict"; // this code works the modern way

// ===== NUMBER =====

/* **************************************************
 * Math.floor => 
 *      Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
 * 
 * Math.ceil => 
 *      Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
 * 
 * Math.round => 
 *      Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.
 * 
 * Math.trunc  => 
 *      Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1. 
 * 
 * Math.random() =>
 *      Returns a random number from 0 to 1 (not including 1).
 * 
************************************************** */
console.log("==================== NUMBER ====================\n")
document.getElementById('num1').innerHTML = "Math.round(1.2345) : " + "<b>" + Math.round(1.2345) + "</b>"

let num = 12.345

document.getElementById('var').innerHTML = "Variables <br>Num : " + "<b>" + num + "</b>"

document.getElementById('num2').innerHTML = "num.toFixed(2) : " + "<b>" + num.toFixed(2) + "</b>"
document.getElementById('num3').innerHTML = "num.toFixed(5) : " + "<b>" + num.toFixed(5) + "</b>"

// ParseInt & parseFloat
console.log("********** ParseInt & ParseFloat **********")
console.log("parseInt('100px') : " + parseInt('100px')); // 100
console.log("parseFloat('12.5em') : " + parseFloat('12.5em')); // 12.5
console.log("parseInt('12.3') : " + parseInt('12.3')); // 12, only the integer part is returned
console.log("parseFloat('12.3.4 ) : " + parseFloat('12.3.4')); // 12.3, the second point stops the reading
console.log("parseInt('a123')  : " + parseInt('a123')); // NaN, the first symbol stops the process

//  Math function
console.log("\n********** Math functions **********")
console.log("Math.random() : " + Math.random());
console.log("Math.random() : " + Math.random());
console.log("\nRandom with min & max ==>\nMath.random(1,5) : " + Math.random(1, 5));
console.log("Math.random(1,5) : " + Math.random(1, 5));
console.log("\nMath.max(3, 5, -10, 0, 1) : " + Math.max(3, 5, -10, 0, 1));
console.log("Math.min(3, 5, -10, 0, 1) : " + Math.min(3, 5, -10, 0, 1));
console.log("\nMath.pow(2, 10) : " + Math.pow(2, 10));
console.log("Math.pow(3, 2) : " + Math.pow(3, 2));



// ===== STRING =====
console.log("\n==================== STRING ====================\n")


let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

console.log("multiple lines: \n" + guestList);

// Accessing character in straing

console.log("\n********** Accessing Character **********")

let str = `Hello`;

// the first character
console.log("str[0] : " + str[0]); // H
console.log("str.at(0) : " + str.at(0)); // H

// the last character
console.log("str[str.length - 1] : " + str[str.length - 1]); // o
console.log("str.at(-1) : " + str.at(-1));

console.log("\nIterate over characters using for..of")
for (let char of "Hello") {
    console.log(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}

console.log("\n********** Sub-string **********")
let str2 = "stringify";

// these are same for substring
console.log("str2.substring(2, 6) : " + str2.substring(2, 6)); // "ring"
console.log("str2.substring(6, 2) : " + str2.substring(6, 2)); // "ring"

// ...but not for slice:
console.log("str2.slice(3, 5) : " + str2.slice(3, 5)); // "ring" (the same)
console.log("str2.slice(6, 2) : " + str2.slice(6, 2)); // "" (an empty string)
/* 
let str1 = '';

for (let i = 65; i <= 220; i++) {
  str1 += String.fromCodePoint(i);
}

console.log(str1) */


//Array
console.log("\n==================== ARRAY ====================\n")

let fruits = new Array();
fruits = ["Apple", "Orange", "Plum"];

console.log("fruits[0] : " + fruits[0]); // Apple
console.log("fruits[1] : " + fruits[1]); // Orange
console.log("fruits[2] : " + fruits[2]); // Plum