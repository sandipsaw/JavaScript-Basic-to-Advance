let a = 10;
let b = 20
let sum = a + b;
console.log("sum of a and b is", sum);
console.log("sum of " + a + " and " + b + " is " + a + b);
console.log(typeof (sum));

let fn = "sandip";
let ln = "saw";
let Fn = fn + ln
console.log(Fn);
console.log(typeof (Fn)); // type of check the type of value

// String + String = String (concatenation)
// String + int = String (concatenation)
// int + int = int (Arithmetic)

let str = "sandip";
console.log(str);


// Type corsion = operator ko dekh kar type me changes lana 
// example 1 + 1 = 2 , 1 + "1" = 11 , 1 - 1 = 0 1 - "1" = 0
// here + operator perform two task that is Concatenation or Artimatic even the value is string or int, but rest of the operator like - * / only perform her task not do Concatenation. if the string 1 is subtracted with 1 the - operation only do subtraction that is why result is 0

// Type Coercion in JavaScript is the automatic conversion of a value from one data type to another (such as string to number, number to boolean, etc.) when it is used in an operation involving different types.

// let age = prompt("Enter a age");
// console.log(typeof(age)); // -> string

// let ages = Number(prompt("Enter a ages"));
// console.log(typeof(ages)); // -> number

let c = 10;
let d = 30;

let temp = c;
c = d;
d = temp;
console.log(c,d); //==> 30 10

c = c + d;
d = c - d;
c = c - d;
console.log(c,d);

[c,d] = [d,c];
console.log(c,d);

let x=12 , y=5;

// Arithmatic operator
console.log(x+y); // 17
console.log(x-y); // 7
console.log(x*y); // 60
console.log(x/y);  // it return float value , quotient 2.4
console.log(Math.floor(x/y)); // it return int value 2
console.log(x%y); // it give reminder 2

// relational operator
console.log(20>5); // true
console.log(20>=20);  // true
console.log(20<5); // false
console.log(20<=5); // false
console.log(20==20); // true , it will check only value 
console.log(20==="20"); // false , it will check value + type of value
console.log(20!=5); // true

// logical operator
console.log(10>5 && 20>14 && 14>=9); // true , && -> all true -> return true
console.log(10>5 && 20>34 && 14>=9); // true , && -> any one false  -> return false
console.log(10>5 || 20>34 || 14>=9); // true , || -> any one true  -> return true

let m=10
let n = ++m // first change then use
console.log(m,n); // 11 11

let p=10;
let q = p++ // first use then change
console.log(p,q); // 11 10

let r=10
console.log(r++ + ++r); // 10 + 12 = 22

// we apply increment or decrement on a variable but not in value example:-let s = 20++

let t = 10;
let u = ++(t++)
// u = ++(10) it is wrong


