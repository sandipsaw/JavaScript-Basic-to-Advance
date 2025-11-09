// let nums = [5,4,0,3,1,6,2];
let nums = [0,2,1]
let arr = []
let a = nums[0]
arr.push(a)
for(let i=0;i<nums.length;i++){
    if(!arr.includes(nums[a])){
        arr.push(nums[a]);
        a = nums[a];
    }else{
        console.log(arr.length);
        // console.log(arr);
        return arr
    }
}