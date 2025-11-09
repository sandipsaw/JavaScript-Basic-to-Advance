let numbers = [2,7,11,15], target = 9;
let n = numbers.length;
let i = 0;
let j = n-1;
while(i<j){
    let sum = numbers[i]+numbers[j];
    if(sum<target){
        i++
    }
    else if(sum>target){
        j--
    }else{
        return [i+1,j+1]
    }
}

/*
Start with two pointers (start & end).

If sum < target → move left pointer right.

If sum > target → move right pointer left.

If equal → return answer.

Time Complexity: O(n)
💾 Space Complexity: O(1)
*/