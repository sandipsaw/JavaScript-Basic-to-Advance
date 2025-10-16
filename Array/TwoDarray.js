// Dynamic Array

const prompt = require("prompt-sync")();
let Size = Number(prompt("Enter size of array : "))
let arr = new Array(Size) // size = 3 // [ [], [], [] ]
let innerArraySize = Number(prompt("Enter inner array size: "))
for(let i=0;i<arr.length;i++){
    arr[i] = new Array(innerArraySize)   // [[ , , ], [ , , ], [ , , ]]
}

for(let i=0;i<arr.length;i++){
    for(let j=0; j<arr[i].length;j++){
        arr[i][j] = Number(prompt("Enter value : "));
    }
}
console.log(arr);

// Find sum of left diagnol(LDS) and right diagnol(RDS)

let arrey = [
    [5,12,15],
    [5,10,25],
    [5,16,20]
]
let LDS = 0 , RDS =0;
for(let i=0;i<arrey.length;i++){ //outer array ka 0 to 2
    for(let j=0;j<arrey[i].length;j++){ // inner array arr[0] ka 0 to 2
        if(i==j){
            LDS = LDS + arrey[i][j];
        }
        if(i+j==arrey.length-1){
            RDS = RDS + arrey[i][j]
        }
    } 
}
console.log("left diagnol sum (LDS) = "+LDS);
console.log("right diagnol sum (RDS) = "+RDS);

// jacked array -> inner array size in different some inner array have size 4,6,2,8 like this.


let abc = new Array(4) // size = 4 // [ , , , ]
for(let i=0;i<abc.length;i++){
    let innerArraySize = Number(prompt("Enter inner array size: "))
    abc[i] = new Array(innerArraySize)   // [[ ...], [ ...], [ ...],[ ...]]
}

for(let i=0;i<abc.length;i++){
    for(let j=0; j<abc[i].length;j++){
        abc[i][j] = Number(prompt("Enter value : "));
    }
}
console.log(abc);

let matrixs = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let sum =0;
for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
        if((i+j)==matrix.length-1 || i==j) sum += matrix[i][j]
    }
}
console.log(sum);


// Transpose of matrix (it use only for square matrix)
for(let i=0;i<matrixs.length;i++){
    for(let j=0;j<matrixs[i].length;j++){
        if(i>j){
            let temp = matrixs[i][j];
            matrixs[i][j] = matrixs[j][i]
            matrixs[j][i]= temp;
        }
    }
}
console.log(matrixs);


// let ans = Array.from({length:mat[0].length},()=>Array(mat.length).fill(0))
// console.log(ans);

let matrix = [
    [1,2,3],
    [4,5,6]
]
let ans = Array.from({length:matrix[0].length},()=>Array(matrix.length))
for(let i=0;i<ans.length;i++){
    for(let j=0;j<ans[i].length;j++){
        ans[i][j] = matrix[j][i];
    }
}
console.log(ans);

let nums = [1,2,3];
// ans = [1,2,3,1,2,3]

let m = nums.length;
let answers = []
for(let i=0;i<2*m;i++){
    ans[i] = nums[(i+m)%m]
}
console.log(answers);

let answer = nums.concat(nums)
console.log(answer);

// _ _ * _ _
// _ * * * _
// * * * * *
// _ * * * _
// _ _ * _ _

let n = 5;
for(let i=1;i<=n;i++){
    let m= Math.abs(Math.ceil(n/2)-i)
    for(let j=1;j<=m;j++){
        process.stdout.write(" ")
    }
    for(let k=1;k<=n-2*m;k++){
        process.stdout.write("*")
    }
    console.log("");
}
