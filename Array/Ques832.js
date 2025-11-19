/* Flipping an Image
Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.

For example, flipping [1,1,0] horizontally results in [0,1,1].
To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

For example, inverting [0,1,1] results in [1,0,0].
 */


let image = [[1,1,0],[1,0,1],[0,0,0]];
for(let i=0;i<image.length;i++){
    let j=0,k=image[i].length-1;
    while(j<k){
        let temp = image[i][j];
        image[i][j] = image[i][k];
        image[i][k] = temp;
        j++;
        k--;
    }
    for(let l=0;l<image[i].length;l++){
        if(image[i][l] ==0) image[i][l] = 1;
        else image[i][l] = 0;
    }
}
// console.log(image);
return image;
