/* 2154. Keep Multiplying Found Values by Two
Hint
You are given an array of integers nums. You are also given an integer original which is the first number that needs to be searched for in nums.

You then do the following steps:

If original is found in nums, multiply it by two (i.e., set original = 2 * original).
Otherwise, stop the process.
Repeat this process with the new number as long as you keep finding the number.
Return the final value of original.*/

let nums = [5, 3, 6, 1, 12], original = 3;
nums.sort((a, b) => a - b)
// [1,3,5,6,12]
// --------------------------------------------------------------------
while (true) {
    let i = 0, j = nums.length - 1;
    let found = false;

    while (i <= j) {
        let mid = Math.floor((i + j) / 2);

        if (nums[mid] < original) i = mid + 1;
        else if (nums[mid] > original) j = mid - 1;
        else (nums[mid] == original) {
            original = 2 * original;
            found = true;
            break;
        }
    }
    if(!found){
        return original;
        break;
    }
}
// ---------------------------------------------------------------------------

// or this way also solve
//  while(nums.includes(original)){
//         original=original*2
//     }
//     return original