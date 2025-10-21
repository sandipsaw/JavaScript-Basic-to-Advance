// let arr = [2,2,1,1,2,2,2,3,3,3,3,3,2,1,4,1,2,1];
// let n = arr.length;
// let count
// for(let i=0;i<n;i++){
//     count=1;
//     for(let j=i+1;j<n;j++){
//         if(arr[i]==arr[j]) count ++
//     }
//     if(count>Math.floor(n/2)){
//         console.log(arr[i]); 
//         console.log("count = ",count);
//         break
//     }
// }
// if(count<Math.floor(n/2)){
//     console.log("element is not more than half of the array length");
// }


// let arr = [1, 2, 0, 5, 0, 0, 14]

// n = arr.length
// for (let i = 0; i < n - 1; i++) {
//     if (arr[i] == 0) {
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] != 0) {
//                 let temp = arr[i]
//                 arr[i] = arr[j];
//                 arr[j] = temp
//                 break
//             }
//         }
//     }
// }
// console.log(arr);

// let arr = [2,2,3,1,3,2,1,1];
// let n = arr.length;
// let array = [];
// let count
// for(let i=0;i<n;i++){
//     count=1;
//     for(let j=i+1;j<n;j++){
//         if(arr[i]==arr[j]) count ++
//     }
//     if(count>Math.floor(n/3)){
//         array.push(arr[i])
//     }
// }
// if(count<Math.floor(n/2)){
//     console.log("element is not more than 1/3 of the array length");
// }
// console.log(array);





// var map = function(arr,fn) {
//     newarr.push(fn(arr))
// };

// let i
// for(i=0;i<arr.length;i++){
//     map(arr[i],fn)
// }
// console.log(newarr);

// const fn = (i) =>{
//     return n + i;
// }

// function fn(num, index) {
//   return num + index;
// }

// function fn(n) {
//   return n + 1;
// }

// function fn() {
//   return 42
// }
let arr =[1,2,3] 
var map = function(arr, fn) {
    
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let func = fn(arr[i], i)
        newArr.push(func); // apply fn on each element with index
    }
    return newArr;
    // console.log(newArr);
};
map(arr, fn)
