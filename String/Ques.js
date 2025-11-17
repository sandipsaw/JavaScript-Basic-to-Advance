// let str = "pwwkew";
let str = "bbbb";
let str1 = str.charAt(0)

let size = 0;
let sizes
for(let i=1;i<str.length;i++){
    if(str1.charAt((str1.length)-1) !== str.charAt(i)){
        if(str1.includes(str.charAt(i))){
            sizes = str1.length;
            // console.log(size); 
            // console.log("str1 -->",str1);
            str1 = "" ;
        }
        else{
            str1 = str1 + str.charAt(i)
        }
    }
    else{
        sizes = str1.length;
        // console.log(str1);
        str1 = ""
        str1 = str.charAt(i)
    }
    if(size<sizes){
        size = sizes
        // console.log(size);
    }
}
console.log(size);
