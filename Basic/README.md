#Type Coercion
Type Coercion in JavaScript is the automatic conversion of a value from one data type to another (such as string to number, number to boolean, etc.) when it is used in an operation involving different types.

let result = '5' - 2; 
console.log(result); // 3

#prompt() in JavaScript
The prompt() function is used to take input from the user through a popup dialog box.
By default, prompt() always returns a string value.

Converting the String to a Number
You can convert the input to a number in two main ways

1. Using Number() function
let age = Number(prompt("Enter your age:"));
console.log(typeof age); // "number"
2. Using + (unary plus) operator
let age = +prompt("Enter your age:");
console.log(typeof age); // "number"

1. Arithmetic Operators
Used to perform mathematical calculations.

2. Increment and Decrement Operators
Used to increase or decrease a value by 1.

3. Relational (Comparison) Operators
Used to compare two values and return a boolean (true/false)

4. Logical Operators
Used to combine multiple conditions and return a boolean value