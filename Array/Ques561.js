let nums = [6,2,6,5,1,2];
         // 0   2   4
nums.sort((a, b) => a - b);
let sum = 0
let val;
for (let i = 0; i < nums.length; i=i + 2) {
    val = Math.min(nums[i],nums[i+1])
    sum += val;
}
return sum;
// console.log(sum);
