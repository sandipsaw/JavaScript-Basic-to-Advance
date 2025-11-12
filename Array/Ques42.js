// let height = [4, 2, 0, 3, 2, 5];
// let height = [0,1,0,2,1,0,1,3,2,1,2,1]
let n = height.length;

let leftMax = [];
leftMax[0] = height[0]
for (let i = 1; i < n - 1; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i])
}
leftMax[n - 1] = leftMax[n - 2]
// console.log(leftMax);

let rightMax = [];
rightMax[n - 1] = height[n - 1];
for (let i = n - 2; i >= 1; i--) {
    rightMax[i] = Math.max(rightMax[i+1], height[i])
}
rightMax[0] = rightMax[1]
// console.log(rightMax);

let sum = 0;
for (let i = 0; i < n; i++) {
    if (height[i] <= Math.min(leftMax[i], rightMax[i])) {
        let h = Math.min(leftMax[i], rightMax[i]) - height[i];
        sum += h
    }
}
return sum;
// console.log(sum);

