// 169. Majority Element

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

let nums = [1,2,1,2,1,1,2]
// let nums = [3,2,3]
// let nums = [1]
nums.sort((a, b) => a - b)
if(nums.length == 1){
    return nums[0]
    // console.log(nums[0]);
}
let a = nums[0]
let count = 1;
for (let i = 1; i < nums.length; i++) {
    if (a == nums[i]) {
        count++
        if (count > Math.floor(nums.length / 2)) {
            // return nums[i]
            console.log(nums[i]);
        }
    }else{
        count = 1
        a = nums[i]
    }
}