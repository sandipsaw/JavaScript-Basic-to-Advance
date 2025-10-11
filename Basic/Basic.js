let prompt = require('prompt-sync')();

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

let age = prompt("Enter a age");
console.log(typeof(age)); // -> string

let ages = Number(prompt("Enter a ages"));
console.log(typeof(ages)); // -> number

let c = 10;
let d = 30;

let temp = c;
c = d;
d = temp;
console.log(c, d); //==> 30 10

c = c + d;
d = c - d;
c = c - d;
console.log(c, d);

[c, d] = [d, c];
console.log(c, d);

let x = 12, y = 5;

// Arithmatic operator
console.log(x + y); // 17
console.log(x - y); // 7
console.log(x * y); // 60
console.log(x / y);  // it return float value , quotient 2.4
console.log(Math.floor(x / y)); // it return int value 2
console.log(x % y); // it give reminder 2

// relational operator
console.log(20 > 5); // true
console.log(20 >= 20);  // true
console.log(20 < 5); // false
console.log(20 <= 5); // false
console.log(20 == 20); // true , it will check only value 
console.log(20 === "20"); // false , it will check value + type of value
console.log(20 != 5); // true

// logical operator
console.log(10 > 5 && 20 > 14 && 14 >= 9); // true , && -> all true -> return true
console.log(10 > 5 && 20 > 34 && 14 >= 9); // true , && -> any one false  -> return false
console.log(10 > 5 || 20 > 34 || 14 >= 9); // true , || -> any one true  -> return true

let m = 10
let n = ++m // first change then use
console.log(m, n); // 11 11

let i = 10;
let q = i++ // first use then change
console.log(i, q); // 11 10

let j = 10
console.log(j++ + ++j); // 10 + 12 = 22

// we apply increment or decrement on a variable but not in value example:-let s = 20++

// let k = 10;
// let u = ++(k++)
// u = ++(10) it is wrong

// Math function
console.log(Math.ceil(10.1));
console.log(Math.floor(10.9));
console.log(Math.round(10.4)); // if If decimal part < 0.5 → rounds down
console.log(Math.round(10.6)); // If decimal part ≥ 0.5 → rounds up
console.log(Math.abs(-6));
console.log(Math.trunc(10.6548354213158632));
console.log(Math.pow(3, 4));
console.log(Math.sqrt(36));
console.log(Math.cbrt(125));
console.log(Math.max(122, 56, 45, 24, 65, 20, 15));
console.log(Math.min(122, 56, 45, 24, 15, 65, 20));
console.log(Math.random());

let num = 426.246146856898
console.log(num.toFixed(3));

let p = Number(prompt("Enter a principle"))
let r = Number(prompt("Enter a rate"))
let t = Number(prompt("Enter a time"))

let Amount = p * Math.pow(1+r/100,t)
let CP = Amount - p;
console.log(Math.trunc(CP));

let n1 = Number(prompt("Enter first number"))
let n2 = Number(prompt("Enter second number"))
let n3 = Number(prompt("Enter third number"))

if(n1+n2 <=n3 || n2+n3 <= n1 || n3+n1 <= n2){
    console.log("Not possible");
}else{
    let s = (n1+n2+n3)/2
    console.log(Math.sqrt(s*(s-n1)*(s-n2)*(s-n3)));
}

// 🧠 if-else Statement :- It is used to make decisions in a program — to run different code based on a condition


if (x > 0) console.log("Positive");
else if (x < 0) console.log("Negative");
else console.log("Zero");

// Accept an integer and check wheter it is an even number or odd

let number = Number(prompt("Enter a number : "));
if(number % 2 == 0){
    console.log(number,"is a even number");
}else{
    console.log(number,"is a odd number");
}

// Accept name and age from the user. check if the user is valid voter or not.

let aged = Number(prompt("Enter a age : "));
var name = prompt("Enter the name of user : ")
if (aged >= 18) {
  console.log(name,"You can vote");
} else {
  console.log(name,"You cannot vote");
}

// Accept three number and and print the greatest among them.

let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));
let num3 = Number(prompt("Enter third number"));

if(num1 > num2 && num1 > num3){
    console.log(num1,"is a greatest number");
}else if(num2 > num1 && num2 > num3){
    console.log(num2,"is a greatest number");
}else{
    console.log(num3,"is a greatest number");
}

let nums = [3, 2, 4];
let target = 6;
let total = 0
for (let i = 0; i < nums.length; i++) {
    for (let j = i+1 ; j < nums.length; j++) {
        total = nums[i] + nums[j]
        if (total == target) {
            console.log(i,j);   
        }
    }
}

// Check a given year is a leap year or not

let year = Number(prompt("Enter a year : "));
let isleap = false;
if(year % 4 == 0){
    if(year % 100 == 0){
        if(year % 400 == 0) isleap = true;
        else isleap = false;
    }else isleap = true;
}else isleap = false;

if(isleap) console.log(`${year} is a leap year`);
else console.log(`${year} is not a leap year`);

