// let arr = [1,5,8,10];
// let k=2, min=0,max=0,difference;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]-k <= 0) arr[i] = arr[i]+k;
//     else arr[i] = arr[i] - k
// }
// // [3,3,5,8]
// for(let i=1;i<arr.length;i++){
//     if(arr[i]<arr[min]) min = i
//     else if(arr[i] >= arr[max]) max = i
// }
// difference = arr[max] - arr[min]
// console.log(difference);

// let arr = [1,5,8,10]; 
// let k=5, min=0,max=0,difference;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]-k <= 0) {
//         arr[i] = arr[i]+k;
//         if(arr[i]<arr[min]) min=arr[i] 
//         else if(arr[i] >= arr[max]) max =arr[i] // 0
//     }
//     else{
//         arr[i] = arr[i] - k;
//         if(arr[i]<arr[min]) min=arr[i];
//         else if(arr[i] >= arr[max]) max = arr[i]
//     }
// }
// console.log(arr);

// difference = max-min
// console.log(difference);


// let arr = [-4,5,4,-2];
// let max_sum = Math.max(...arr)

// let sum 
// let subArray = [];
// let SubPart = [];
// for (let i = 0; i < arr.length; i++) {
//     sum=0
//     for (let j = i; j < arr.length; j++) {
//         sum = sum + arr[j];
//         subArray.push(arr[j])
//     }
//     if (max_sum < sum) {
//         max_sum = sum
//         SubPart = subArray
//     }
//     subArray = []


// }
// console.log(SubPart);
// console.log(max_sum);


/*
let nums1 = [1, 4,5,8,2]
let nums2 = [3, 2,9]
nums1.push(...nums2);

// 1,2,2,3,4,5,8,9
console.log(nums1);
nums1.sort((a, b) => a - b)
let i = 0, j = nums1.length - 1;
let mid;
console.log(nums1);

// 1 2 3 4  = 1
// 0 1 2 3
if ((i + j) % 2 == 0) {
    //odd
    mid = (i + j) / 2
    // return nums1[mid]
    console.log(nums1[mid]);
    
} else {
    //even
    mid = (i + j) / 2  // 1.5
    // return(nums1[Math.floor(mid)]+nums1[Math.ceil(mid)])/2
    console.log((nums1[Math.floor(mid)]+nums1[Math.ceil(mid)])/2);
}*/


let arr = [1,2,0];
arr.sort((a,b)=>a-b);
console.log(arr);

let i=0,j=1;
do {
    if(i<arr.length && arr[i]>=1){
        
        if(arr[i] == j){           
            j++  
        }else {
            console.log(j);
            return
        }
    }
    else console.log(j);
    
} while (i<arr.length);

// for(let i=0;i<arr.length;i++){
//     if(i<arr.length && arr[i]>=1){
        
//         if(arr[i] == j){
//             console.log(i);
            
//             j++  
//         }else {
//             console.log(j);
//             return
//         }
//     }
// }