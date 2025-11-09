let nums = [-1,0,1,2,-1,-4]
let arr = []
let n = nums.length
if(n<3){
    return{}
}
nums.sort((a,b)=>a-b);
const twoSum = (nums,target,i,j) =>{
    while(i<j){
        if(nums[i]+nums[j] < target) i++
        else if(nums[i]+nums[j]>target) j--
        else{
            while(i<j && nums[i]==nums[i+1]) i++
            while(i<j && nums[j]==nums[j-1]) j-- 
            arr.push([-target,nums[i],nums[j]] )
            i++;
            j--;      
        }
    }
}
for(let i=0;i<n;i++){
    if(i>0 && nums[i] == nums[i-1]){
        continue
    }
    let n1 = nums[i]
    let target = -n1;

    twoSum(nums,target,i+1,n-1)
}
return arr

/*
Sort the array

Fix one number

Use two pointers to find the other two

Skip duplicates

Store triplets where sum = 0

Time Complexity: O(n²)
💾 Space Complexity: O(1)
*/