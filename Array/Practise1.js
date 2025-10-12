// find the second max element from an array
let prompt = require('prompt-sync')();
let arr = [28,6,75,48,86,79,86]
let max = Math.max(arr[0],arr[1])
let sec_max = Math.min(arr[0],arr[1])
for(let i=2;i<arr.length;i++){
    if(arr[i]>max){
        sec_max = max;
        max = arr[i];
    }
    else if(arr[i]>sec_max && arr[i]!=max){
        sec_max = arr[i];
    }
}
console.log(`second maximum Element = ${sec_max}`);

// find the Second minimum element from an array

let arr1 = [24,13,45,35,10,12,64,7,7];
let min= Math.min(arr1[0],arr1[1]);
let sec_min= Math.max(arr1[0],arr1[1]);
for(let i=2;i<arr1.length;i++){
    if(arr1[i]<min){
        sec_min = min;
        min = arr1[i];
    }
    else if(arr1[i]<sec_min && arr1[i]!=min){
        sec_min =  arr1[i]
    }
}
console.log(`second minimum Element = ${sec_min}`);

// Reverse the array with taking extra space
let arr2 = [14,64,35,75,24,56,35];
let arr3 = []
for(let i=0;i<arr2.length;i++){
    arr3[i] = arr2[arr2.length-i-1]
}
console.log(arr3);

// Reverse the array with taking extra space 
let arr4 = [10,20,30,40,50,60,70,80];
let temp4 = new Array(arr4.length)
let i=0;
for(let j=arr4.length-1;j>=0;j--){
    temp4[i]=arr4[j]
    i++;
}
console.log(temp);

// Reverse the array without taking extra space
let arr5 = [1,2,3,4,5,6,7];
let j=0, k = arr5.length-1;
while(j<k){
    let temp = arr5[j];
    arr5[j] = arr5[k];
    arr5[k] = temp;
    j++;
    k--;
}
console.log(arr5);
//shift all zero to left and all 1 to right(two pointer algorithm)

let array = [1,0,1,1,1,0,0,1,0,1,1,0];
let p=0;
for(let q=0; q<array.length;q++){
    if(array[q]==0){
        let temp = array[p]
        array[p]=array[q]
        array[q]=temp
        p++
    }
}
console.log(array);

// Array left rotation by 1

let array1 = [1,2,3,4,5,6,7,8,9,10];
let temp1 = array1[0];
for(let i=0;i<array1.length;i++){
    array1[i]=array1[i+1];
    if(i==array1.length-1){
        array1[i] = temp1
    }
}
console.log(array1);

// Array right rotation by 1
let array2 = [10,20,30,40,50,60];
let temp2 = array2[array2.length-1]
for(let i=array2.length-1; i>0;i--){
    array2[i] = array2[i-1]
}
array2[0]= temp2;
console.log(array2);

// Rotate a 2d array in anti-clockwise

let array3 = [
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 0]
];

for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        if(i>j){
            let temp = array3[i][j]
            array3[i][j]=array3[j][i]
            array3[j][i]=temp
        }
    }
}
console.log(array3);

// Rotate a 2d array in clockwise (Bruteforce)
let array4 = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9]
];
let n = array4.length
let temp = [[],[],[]]
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        temp[j][n-i-1] = array4[i][j]
    }
}
console.log(temp);

// Rotate a 2d array in clockwise (in same 2d array)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let m = matrix.length;
for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
        if (i > j) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
}
console.log(matrix);

for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
        let f = 0, b = m - 1, temp;
        if (f < b) {
            let temp = matrix[i][f];
            matrix[i][f] = matrix[i][b]
            matrix[i][b] = temp;
        }
    }
    // matrix[i].reverse() // you can also use it instead of 2nd for loop
}
console.log(matrix);