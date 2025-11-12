let nums = [-1,2,1,-4], target = 1
nums.sort((a,b)=>a-b);
//  [-4,-1,1,2]  
 //   i  j   k
let closestSum = 100000;
for(let i=0;i<nums.length-2;i++){
    let j=i+1;
    let sum = 0;
    let k=nums.length-1;
    while(j<k){                          // -3      -1         2
        sum = nums[i]+nums[j]+nums[k];   // -3  -2  -1  0   1  2
        if(Math.abs(target-sum)<Math.abs(target-closestSum)){
            closestSum = sum;
        }
        if(sum<target) j++; 
        else k--;
    }
}
// console.log(closestSum);
return closestSum