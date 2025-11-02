//1. Print a multiplication table from 1 to 10 (nested loops).

// for(let i=1;i<=10;i++){
//     for(let j=1;j<=10;j++){
//         console.log(i + " * " + j + " = " + (i*j) + " ");
//     }
//     console.log(" ");
// }

//2. Print all pairs of numbers (i, j) where i < j and both are from 1 to 5.

// for(let i=1 ; i<=5;i++){
//     for(let j=1;j<=5;j++){
//         if(i<j){
//             console.log(i,j);
//         }
//     }
// }

//3. Find all duplicate elements in an array (using nested loops).

// let arr = [1,2,3,2,2,3,1,2,3,3,4,5,1,2,6];
// let duplicateElement = []
// for(let i=0; i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i] == arr[j]){
//             if(!duplicateElement.includes(arr[i])) duplicateElement.push(arr[i])
//         }
//     }
// }
// console.log(duplicateElement);

//4. Merge two arrays manually (without using built-in methods).

// let arr1 = [1,3,5,7,9];
// let arr2 = [2,4,6,8,10];
// let merge = [];

// for(let i=0;i<arr1.length;i++){
//     merge[merge.length] = arr1[i]
// }
// for(let i=0;i<arr2.length;i++){
//     merge[merge.length] = arr2[i]
// }
// console.log(merge);

//5. Sort an array in ascending order using loops only.

// let arr = [2,3,15,4,25,17,32,10]

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp
//         }
//     }
// }
// console.log(arr);

//6. Sort an array in descending order using loops only.
// let arr = [2,3,15,4,25,17,32,10]

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]<arr[j]){
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp
//         }
//     }
// }
// console.log(arr);

//7. Print all unique elements in an array.

// let arr= [1,2,3,4,2,1,5];
// for(let i=0;i<arr.length;i++){
//     let count = 0;
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]==arr[j]) count++
//     }
//     if(count==1) console.log(arr[i]);
// }

//8. Count how many times each element appears in an array.

// let arr = [1,2,2,5,4,3,2,4,5,1,2,4,2,3];
// let arr1 =[]
// for(let i=0;i<arr.length;i++){
//     let count = 0;
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]==arr[j]) count++
//     }
//     if(!arr1.includes(arr[i])){
//         arr1.push(arr[i])
//         console.log(arr[i] +" is appering "+ count + " time");
//     }
// }