let matrix = [[1, 2, 3], [4, 5, 6]]
let ans = Array.from({ length: matrix[0].length }, () => (Array(matrix.length)))
for (let i = 0; i < ans.length; i++) {
    for (let j = 0; j < ans[0].length; j++) {
        ans[i][j] = matrix[j][i]
    }
}
console.log(ans);
// return ans
