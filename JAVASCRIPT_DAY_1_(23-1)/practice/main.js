"use strict"; // this code works the modern way

console.log("Hey...\nI'm External Javascript...!!!")

//  Variables ==> let, const , var (old javascript)

let msg;
msg = "Hey, I'm a let variable"

document.getElementById("v-let").innerHTML = msg;

const date = "23/01/2023"

document.getElementById("v-const").innerHTML = date;

// Interaction ==> alert prompt, confirm

/* alert ("I'm alert function");

let name = prompt("I'm prompt \nEnter your name :  ", "" );

confirm("Hey Confirm me...!!!!") */

console.log("Math operators")

// Type-of Variables

console.log("typeof undefined = ", typeof undefined) // "undefined"
console.log("typeof 0 = ", typeof 0) // "number"
console.log("typeof 10n = ", typeof 10n) // "bigint"
console.log("typeof true = ", typeof true) // "boolean"
console.log("typeof \"foo\" = ", typeof "foo") // "string"
console.log("typeof Symbol\(\"id\"\) = ", typeof Symbol("id")) // "symbol"
console.log("typeof Math = ", typeof Math) // "object"  (1)
console.log("typeof null = ", typeof null) // "object"  (2)
console.log("typeof alert = ", typeof alert) // "function"  (3)

// Math operators

/* 
Addition         +,
Subtraction      -,
Multiplication   *,
Division         /,
Remainder        %,
Exponentiation  ** 
*/

console.log("5 % 2 = ", 5 % 2); // 1, the remainder of 5 divided by 2
console.log("8 % 3 = ", 8 % 3); // 2, the remainder of 8 divided by 3
console.log("8 % 4 = ", 8 % 4); // 0, the remainder of 8 divided by 4
console.log("2 ** 2 = ", 2 ** 2); // 2² = 4
console.log("2 ** 3 = ", 2 ** 3); // 2³ = 8
console.log("2 ** 4 = ", 2 ** 4); // 2⁴ = 16
console.log("4 ** (1/2) = ", 4 ** (1 / 2)); // 2 (power of 1/2 is the same as a square root)
console.log("8 ** (1/3) = ", 8 ** (1 / 3)); // 2 (power of 1/3 is the same as a cubic root)
console.log("2 + 2 + '1' = ", 2 + 2 + '1'); // "41" and not "221"
console.log("convert into number : 6 - '2' = ", 6 - '2'); // 4, converts '2' to a number
console.log("convert into number : '6' / '2' = ", '6' / '2'); // 3, converts both operands to numbers

let apples = "2";
let oranges = "3";

console.log("apples + oranges = ", apples + oranges); // "23", the binary plus concatenates strings

// both values converted to numbers before the binary plus
console.log("+apples + +oranges = ", +apples + +oranges); // 5
// the longer variant
// console.log("Number(apples) + Number(oranges) = ", Number(apples) + Number(oranges) ); // 5

// Bitwise Operator

/* 
AND      ( & )
OR       ( | )
XOR      ( ^ )
NOT      ( ~ )
LEFT SHIFT      ( << )
RIGHT SHIFT     ( >> )
ZERO-FILL RIGHT SHIFT   ( >>> )
*/

// Callback function 

/* function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    function () { alert("You agreed."); },
    function () { alert("You canceled the execution."); }
); */


// Arrow function

// let age = prompt("What is your age?", 18);

/* let age = 19

let welcome = (age < 18) ?
    () => alert('Hello!') :
    () => alert("Greetings!");

welcome(); */



