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

/*

//  find missing positive integer

// Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

// You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

// let arr = [1,2,0];
let nums = [3,4,1,1,-1,1]
// let arr = [7,8,9,10,11,12]

nums.sort((a,b)=>a-b);
console.log(nums);
nums = [...new Set(nums)]

let j=1;
let isfound = false;
for(let i=0;i<nums.length;i++){
    if(nums[i]>=1){
        
        if(nums[i] == j){
            j++  
        }else {
            console.log(j);
            isfound = true
            return j;
        }
    }
}
if(!isfound) return j
*/



/*
// Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1]. 

// mid = 2 4 3 , i= 3 , first = 4, j=5 4

let nums = [5,7,7,8,8,10];  
let first = -1, last = -1;
// target = 8

let i=0,j=nums.length-1;

while(i<=j){
    let mid = Math.floor((i+j)/2)
    if(nums[mid]== target){
        first = mid;
        j=mid-1;
    }else if(nums[mid]<target) i=mid+1;
    else j=mid-1;
}

i=0,j=nums.length-1;

while(i<=j){
    let mid = Math.floor((i+j)/2)
    if(nums[mid]== target){
        last = mid;
        i=mid+1;
    }else if(nums[mid]<target) i=mid+1;
    else j=mid-1;
}
// console.log(first,last);
return [first,last]
*/

// Reverse a integer
// let x = 123;
// let val = 0
// while(x>=0){
//     let rem = x % 10;
//     val = val * 10 + rem;
//     x = x / 10;
//     console.log(val);
// }

// let nums = [1,2,5,3];
// let target = 2
// let arr = []
// nums.sort((a,b)=>a-b)

// for(let i=0;i<nums.length;i++){
//     if(nums[i]==target){
//         arr.push(i)
//     }
// }
// return arr
// console.log(arr);


// let arr = [1, 3]
// let nums = [1, 5, 10];
// let n = 20;

// let missing = 1,i=0,added=0;
// while (missing <= n) {
//   if (i < nums.length && nums[i] <= missing) {
//     missing += nums[i];
//     i++;
//   } else {
//     // we need to patch miss
//     console.log(missing);
//     missing += missing;
//     added++;
//   }
// }
// console.log(added);



// console.log(fn, ln);
// while (fn <= ln) {
//     let temp = nums[fn];
//     nums[fn] = nums[ln];
//     nums[ln] = temp
//     fn++;
//     ln--
// }

/*
let nums = [1, 3, 2];
let n = nums.length - 1;

let i, j, fn = 0;

// Step 1: Find the first decreasing element from the right
for (i = n; i > 0; i--) {
    if (nums[i - 1] < nums[i]) {
        break;
    }
}
fn = i - 1; // fn is the index of the element to be swapped

// Step 2: If such an element exists
if (fn >= 0) {
    for (j = n; j > fn; j--) {
        if (nums[j] > nums[fn]) {
            // Swap nums[fn] and nums[j]
            [nums[fn], nums[j]] = [nums[j], nums[fn]];
            break;
        }
    }
}

// Step 3: Reverse the suffix (right part after fn)
let first = fn + 1;
let last = n;

while (first < last) {
    [nums[first], nums[last]] = [nums[last], nums[first]];
    first++;
    last--;
}
// console.log(nums);
*/
