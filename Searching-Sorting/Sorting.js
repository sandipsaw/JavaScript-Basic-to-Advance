// // Bubble sort

// let arr = [2,45,3,6,44,5,85,65,23];
// // [2,3,6,44,5,45,65,23,85];
// // [2,3,5,6,44,23,45,65,85];
// // [2,3,5,6,23,44,45,65,85];

// for(let i=0;i<arr.length-1;i++){
//     for(let j=0;j<arr.length-1-i;j++){
//         if(arr[j]>arr[j+1]){
//             let temp = arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp
//         }
//     }
// }
// console.log(arr);

// // selection sort 

// let arrey = [2,45,3,6,44,5,85,1,65,23];
// //  [2,45,3,6,44,5,85,1,65,23];
// //  [1,45,3,6,44,5,85,2,65,23];

// for(let i=0;i<arrey.length-1;i++){
//     let small = i;
//     for(let j=i+1;j<arrey.length;j++){
//         if(arrey[j]<arrey[small]){
//             small = j
//         }
//     }
//     if(i != small){
//         let temp = arrey[i];
//         arrey[i]=arrey[small]
//         arrey[small]=temp
//     }
// }
// console.log(arrey);

// Print the pattern

// _ _ _ _ a
// _ _ _ a a 
// _ _ a a a 
// _ a a a a 
// a a a a a
let n = 5; // row

// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i;j++){
//         process.stdout.write(" ")
//     }
//     for(let k=1;k<=i;k++){
//         process.stdout.write("*")
//     }
//     console.log("");
// }

// a a a a a
// a a a a
// a a a 
// a a
// a
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n+1-i;j++){
//         process.stdout.write("*")
//     }
//     console.log("");
// }

// ____*____
// ___*_*___
// __*_*_*__
// _*_*_*_*_
// *_*_*_*_*

// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i;j++){
//         process.stdout.write("_");
//     }
//     for(let j=1;j<=i;j++){
//         process.stdout.write("*")
//         if(j<i){
//             process.stdout.write("_");
//         }
//     }
//     for(let j=1;j<=n-i;j++){
//         process.stdout.write("_");
//     }
//     console.log("");
// }

// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i;j++){
//         process.stdout.write("_");
//     }
//     for(let j=1;j<=i;j++){
//         process.stdout.write("*")
//         if(j<i){
//             process.stdout.write("_");
//         }
//     }
//     for(let j=1;j<=n-i;j++){
//         process.stdout.write("_");
//     }
//     console.log("");
// }