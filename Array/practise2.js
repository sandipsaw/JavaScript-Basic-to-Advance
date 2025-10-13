// Array left rotation by k step (Bruteforce)

let arr = [1, 2, 3, 4, 5];

let k = 24;
k = k % arr.length; // remove the extra step for value k
let count = 0;

for (let i = 0; i < k; i++) {
    let copy = arr[0];
    for (let j = 0; j < arr.length; j++) {
        arr[j] = arr[j + 1];
    }
    arr[arr.length - 1] = copy;
    count++
}
console.log(arr);
console.log(count);

// array left Rotation by k 

let array = [10, 20, 30, 40, 50];
let temp = [];
let K = 2;
for (let i = 0; i < array.length; i++) {
    temp[i] = array[(i + K) % array.length]
}
console.log(temp);

// Array left Rotation by K (Most effecient way)

let Array = [1, 3, 5, 7, 9];
let Kt = 3
Kt = Kt % Array.length;

for (let i = 0; i < Array.length; i++) {
    if (Kt < Array.length) {
        let temp = Array[i];
        Array[i] = Array[Kt]
        Array[Kt] = temp;
        Kt++
    }
    else if (i < Array.length - 1) {
        temp = Array[i];
        Array[i] = Array[i + 1];
        Array[i + 1] = temp
    }
}
console.log(Array);

// array left Rotation by k (Most Efficient way)

let arrey = [5, 10, 15, 20, 25, 30];
let KT = 4;

const reverse = (arrey, i, j) => {
    while (i < j) {
        let temp = arrey[i];
        arrey[i] = arrey[j];
        arrey[j] = temp;
        i++;
        j--;
    }
}

reverse(arrey, 0, KT - 1)
reverse(arrey, KT, arrey.length - 1)
reverse(arrey, 0, arrey.length - 1)

console.log(arrey);

// Array right rotation by k

let nums = [1, 2]
let n = 17;
const reversal = (nums, i, j) => {
    while (i < j) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
        i++;
        j--;
    }
}
n = n % nums.length;

if(n == 0){
    return nums
}
else if(nums.length > n) {
    reversal(nums, 0, nums.length - 1 - n)
    reversal(nums, nums.length - n, nums.length - 1)
    reversal(nums, 0, nums.length - 1)
}
console.log(nums);
