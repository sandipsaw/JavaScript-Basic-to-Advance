
let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]

let row = matrix.length;
let col = matrix[0].length;
let total = row*col;
let arr = [];

let top = 0;  // row
let left = 0; // col
let bottom = row-1; // row
let right = col-1; // col

while(arr.length<total){
    for(let i=left;i<=right && arr.length < total ;i++){
        arr.push(matrix[top][i])
    }
    top++;
    for(let i=top;i<=bottom && arr.length < total ;i++){
        arr.push(matrix[i][right])
    }
    right--;
    for(let i=right;i>=left && arr.length < total ;i--){
        arr.push(matrix[bottom][i])
    }
    bottom--;
    for(let i=bottom;i>=top && arr.length < total ;i--){
        arr.push(matrix[i][left])
    }
    left++
}
return arr;