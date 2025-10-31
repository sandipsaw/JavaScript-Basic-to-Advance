let prompt = require('prompt-sync')();

//1. Find the factorial of a number (e.g., 5).

// let n = prompt('enter a number : ');
// let fact = 1
// for(let i=1;i<=n;i++){
//     fact *= i
// }
// console.log(fact);

//2. Calculate the sum of elements in an array.

// let arr = [5,8,12,19,24,27,35,40];
// let sum = 0;
// for(let i=0;i<arr.length;i++){
//     sum += arr[i]
// }
// console.log(sum);

//3. Find the maximum number in an array.

// let arr = [5,8,12,19,54,24,27,35,40];

// const maximum = Math.max(...arr)
// console.log(maximum);

// let max = arr[0];
// for(let i=1;i<arr.length;i++){
//     if(max<arr[i]){
//         max = arr[i]
//     }
// }
// console.log(max);

//4. Find the minimum number in an array.

// let arr = [19,54,24,50,12,27,35,40];

// const minimum = Math.min(...arr)
// console.log(minimum);

// let min = arr[0];
// for(let i=1;i<arr.length;i++){
//     if(min>arr[i]){
//         min = arr[i]
//     }
// }
// console.log(min);

//5. Count how many even numbers are in an array.

// let count = 0
// let arr = [19,54,24,50,12,27,35,40];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0) count++
// }
// console.log("there are "+count+" even numbers are in an array.");

//6. Count how many odd numbers are in an array.

// let count = 0
// let arr = [19,54,24,50,12,27,35,40];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2!=0) count++
// }
// console.log("there are "+count+" odd numbers are in an array.");

//7. Reverse a string using a for loop.

// let string = "hello madam";
// for(let i=string.length;i>=0;i--){
//     console.log(string[i]);
// }

//8. Count vowels in a string (e.g., "hello madam").

// let string = "hello madam";
// let count = 0

// for (let i = 0; i < string.length; i++) {
//     if (string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u" || string[i] == "A" || string[i] == "E" || string[i] == "I" || string[i] == "O" || string[i] == "U") count++
// }
// console.log(count);

// const vowels = "aeiouAEIOU";
// for(let i=0;i<string.length;i++){
//     if(vowels.includes(string[i])) count++
// }
// console.log(count);

//9. Count consonants in a string.

// let string = "hello madam"
// const vowels = 'aeiou AEIOU';
// let count = 0;
// for(let i=0;i<string.length;i++){
//     if(!vowels.includes(string[i]) || !vowels.includes(" ")) count++
// }
// console.log(count);

//10. Print each character of a string on a new line.

// let string = "hello madam";
// for(let i=0;i<string.length;i++){
//     console.log(string[i]);   
// }

//11. Print only vowels from a given string.

// let string = "hello madam";
// const vowels = 'aeiouAEIOU'
// for(let i=0;i<string.length;i++){
//     if(vowels.includes(string[i])) console.log(string[i]);   
// }

//12. Find the product of all numbers in an array.

// let arr = [1,2,3,4,5,8,10]
// let val = 1
// for(let i=0;i<arr.length;i++){
//     val *= arr[i];
// }
// console.log(val);

//13. Print the index and value of each array element.

// let arr = [8,45,34,21,5,14,42]
// for(let i=0;i<arr.length;i++){
//     console.log(i+" index of array element is "+arr[i]);
// }

