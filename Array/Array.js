let prompt = require('prompt-sync')();


let arr = [10,20,30,40]
console.log(arr);

arr.push(100)
arr.unshift(1000)
console.log(arr);

arr.pop();
arr.shift()
console.log(arr);

console.log(arr[2]);
console.log(arr.length);

arr[2] = 542
console.log(arr);

let size = Number(prompt("Enter the size of array : "))
let array = new Array(size)
let sum = 0;
for(let i=0;i<array.length;i++){
    array[i]=Number(prompt(`Enter the ${i}th element : `))
    sum = sum + array[i]
}
console.log(array);
console.log("sum = ", sum);

// find the maximum element from the array
let abc = [10,20,30,50,14,35,48,65,95,24,36];
let max = abc[0];
for(let i = 1;i<abc.length;i++){
    if(abc[i]>max){
        max = abc[i]
    }
}
console.log(`Maximum element is ${max}`);
let min = abc[0];
for(let i = 1;i<abc.length;i++){
    if(abc[i]<min){
        min = abc[i]
    }
}
console.log(`Minimum element is ${min}`);
