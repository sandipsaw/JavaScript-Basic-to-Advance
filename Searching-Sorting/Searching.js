// Linear Search algorithm

let prompt = require('prompt-sync')();
let arr = [1, 25, 4, 2, 574, 24, 60, 541, 62, 14, 52, 41]
let target = Number(prompt("Enter a target element :"));
let index = -1;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
        index = i;
        break;
    }
}
if (index == -1) console.log("Element not Found");
else console.log("Element Found at index :" + index);

// Binary Search algorithm

let arrey = [11,22,45,65,75,77,258] // array are must be sorted
let Target = Number(prompt("Enter a target Element :"));

const BinarySearch = (arrey,Target) => {
    let i = 0, j = arrey.length - 1;
    
    while (i <= j) {
        let mid = Math.floor((i + j) / 2);
        if (arrey[mid] == Target) { return mid }
        else if (arrey[mid] < Target) { i = mid + 1 }
        else { j = mid - 1 }
    }
    return -1;
}

if(BinarySearch(arrey,Target) == -1) console.log("element not found");
else console.log("element found");

