// Difference between var let const
// var old js me tha 
// var add itself to window object
// var function scoped hota hai ==> var apne parent function me kahi bhi use ho sakta hai
// aap phir se declare kar sakte ho same name se and error nahi aaega  

// function math(){
//     for(let i=1; i<10; i++){ 
//         console.log(i);
//     }
//     console.log(i);
// }

function math() {
    for (var i = 1; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}
math();

// let and const new js me hai
//let , const does not add itself to window object
// let braces(curly bracket `{}`) scoped hota hai 
// let apne parent braces me kahi bhi use ho sakta
// aap phir se declare nahi kar sakte ho same name se, agar karo ge toh error aaega
// for(let i=1; i<10; i++){ 
//         console.log(i);
// }

// scoped( global , block , functional )
// global scoped :- aesa koi bhi variable jo kisi curly braces ke under nahi hai wo sare global scoped variable hote hai 
// block scoped :- aesa koi bhi variable jo kisi curly braces ke under hai wo sare block scoped variable hote hai lekin var block ko respect nahi karta kyuki wo function scoped hota hai .jab code run hoga tab wo sare code function me jata hai.
// functional scoped :- var is a function scoped variable , var pure function me kahi bhi use ho sakta hai

// Reassignment :-wapas se value dena 
// var a = 10;  a = 5
// Redclaration :- wapas se same variable banana var a = 10; var a = 20
// Redclaration is possible with var, but not posibble with let 

// Temporal dead zone :- utna area jitney me js ko pata toh hai ki variable exists karta hai per wo aapko value nahi de sakta 
// ye sirf let and const ke sath he hota hai 
// let kahta hai tum mujhe tab tak access nahi kar sakte jab tak me initialize nhi hua hu

// console.log(a) // a is not defined

// console.log(a) // cannot access a before initialization
// let a = 12; 

// Hoisting impact per type :- 1 variable ko jab js me banate hai tab wo variable 2 hisso me toot jata hai and uska declare part upper chala jata hai and uska initialization part niche rah jata hai.
//             var a = undefined // upper chala jata hai
// console.log(a)
// var a = 12  
//                 a = 12 // niche raha jata hai

/* js language me kuch chije aesa nhi hai jo ham use karte hai or wo chije hame js se nahi balki brower se milte hai aesa sare feature jo js ka part nhi hai but phir bhi ham use kar sakte hai unhe ham dhund sakte hai ek particular object me jiska name hai window */

// Type Coercion in JavaScript means automatically converting one data type to another when needed.
// It’s how JavaScript handles operations between different data types — like a number with a string, or a boolean with a number.

// Types of Type Coercion
// There are two main types:

// 1. Implicit Coercion (Automatic Conversion)
// JavaScript automatically converts the data type behind the scenes.

// ✅ Example 1: String + Number
// console.log("5" + 2);  // "52"
// JS converts the number 2 into a string "2"
// and then joins them → "5" + "2" = "52"

// ✅ Example 2: String - Number
// console.log("5" - 2);  // 3
// 👉 The string "5" is converted to number 5
// Then → 5 - 2 = 3

// ✅ Example 3: Boolean + Number
// console.log(true + 1);  // 2

// 2. Explicit Coercion (Manual Conversion)
// You manually convert data types using functions.

// ✅ Example 1: String → Number
// console.log(Number("123")); // 123
// ✅ Example 2: Number → String
// console.log(String(123)); // "123"
// ✅ Example 3: Boolean Conversion
// console.log(Boolean(0));    // false
// console.log(Boolean("hi")); 

// Truthy and Falsy
// What are Truthy and Falsy Values?
// When JavaScript expects a boolean value (like inside an if statement),
// it automatically converts other data types into either true or false.

// falsy value in JavaScript: 0 , -0 , null , undefined , NaN , "" , document.all
// and iske alwal jo bhi hai wo sab truthy value hai jaise : 1 , "hello" , [] , {} , " " , -1

// why type of NaN is a Number :- kyuki NaN ek failed number operation hota hai
// for example : console.log(2*"hello");

// difference between undefined and null  
// let x ;
// console.log(x); // undefined
// let y = null ; 
// console.log(y); // null 

// jab bhi ham variable create kar rahe hote hai toh by default uski value undefined hoti hai 
// lekin ham null ko manually assing karte hai 


// console.log(Boolean(""));     // false
// console.log(Boolean(" "));    // true (space is truthy)
// console.log(Boolean([]));     // true
// console.log(Boolean({}));     // true
// console.log(Boolean(null));   // false
// console.log(Boolean(NaN));    // false

// Data Type in js
  // there are two type of data type in js 

  // premitive :- aesi sare value jinko copy karne per tumhe ek real copy mil jaye
  // premitive type = (string, number, boolean, null, undefined, symbol, bigint)

  // reference :- inko copy karne per tumhe real copy nahi milegi but reference  milega parent ka 
  // reference type = (Array, Object, Function)

  /*premitive- premptive data type are immutable(not changeable) and stored directly in memory. 
  bina bracket wale sare value ko primitive kahte hai 

  1) Number (Integer , floating-point)
  let num = 42;
  let floatnum = 50.125;

  2) String (Text enclosed in quotes)
  if anything is in single quotes(' ') , double quotes(" ") or backticks(` `) are all string
  let str = "Hello world!";

  3) Boolean (Reresent true or false)
  let isAvailable = true;

  4) null (Represent an empty or non-existent value)
  let emptyvalue = null;

  5) undefined (Declared but not assigned a value)
  let xyz;

  6) symbol (Unique and immutable value)
  let sym = symbol("unique");
  let obj ={
      uid:1,
      name:"sandip",
      age:12,
      email:"test@gmail.com"
  }
  let u1 = symbol("uid")
  obj[u1] = "001"

  7) BigInt (Handle large number beyond
  Number.MAX_SAFE_INTEGER)
  let bigInt = 12345678910781665246n;

  Reference(relative) data type in js
  reference data type are stored in memory by reference and can be modified

  // jab bhi ham kisi 1 variable ke value ko copy karke dusre variable ko denge toh wo copy na hoke reference pass hoga means agar kisi ek me bhi changes hoga toh wo changes hame dono me dikhega
  let a = [1,2,3];
  let b = a 
  b.pop()
  console.log(a) // [1,2]
  console.log(b) // [1,2]

  1) object (collection of key-value pair)
  let person = {name :"sandip" , age :25}

  2) Array (Ordered list of value)
  let fruits = ["apple" , "banana" , "mango"];

  - Array
  - Object
  - function*/


  // Dynamic Typing :- js me static typing nahi hai and yaha per hai dynamic typing jiska matlab hota hai aap data ko change kar sakte ho 
  // let a =10;
  // a = true
  // a = "sandip"
  // a = [0,1,2,3];
  
  // jab bhi ham prompt ke through answer store karte hai toh wo string ke form me store hota hai , e.g are given below

  let q = prompt("Enter a number");
  console.log(q,typeof(q));  // -> string

  // toh ham ise Number me convert karne ke liye thora sa change karenge
  let p = Number(prompt("enter a number"));
  console.log(p,typeof(p)); //-> number
  
// What is an Operator?
// An operator is something that performs an action on one or more operands (values or variables).

  //1) Arithmatic Operation
  let c = 20;
  let d = 4;
  let e = "sandeep"
  console.log(c*d);
  console.log(c+d);  
  console.log(c-d);
  console.log(c/d);  
  console.log(c%d);  
  console.log(c+e); // -> 20sandeep
  console.log(c**d); // exponential - 20^4  

  //Assignment Operator
  let x = 10
  x += 5 // equilvalent to x = x+5
  console.log(x)  //15
  x -= 5 // equilvalent to x = x-5
  console.log(x)  //10
  x *= 5 // equilvalent to x = x*5
  console.log(x)  //50
  x /= 5 // equilvalent to x = x/5
  console.log(x)  //10
  x %= 5 // equilvalent to x = x%5
  console.log(x)

  // Comparission operator (==,===,!=,!==,<,>,<=,>=)
  // these are check the lhs and rhs are equal or not 
  console.log(5 == "5") // true (loose equality, type conversion happen)
  console.log(5 === "5") // false (strict equality,no type conversion)

  console.log(10 != "10") // false (loose inequality)
  console.log(10 !== "10") // true (strict inequality)

  console.log(8 > 5) //true
  console.log(8 < 5) //false
  console.log(8 >= 8) //true
  console.log(8 <= 10) //true

  // logical operator
  console.log(false && true) // false (Both condition must be true)
  console.log(true || false) // true (Atleast one condition must be true)
  console.log(!true) // false (Negates the value)

  //Variable hosting in javascript
  //Hosting move variable and function declaration to the top of their scope before execution

  //Using var (hoisted but undefined) 
  console.log(a);
  var a = 10;

  //Using let & const (Hoisted but not initialized)
  console.log(a);
  let b = 10;
