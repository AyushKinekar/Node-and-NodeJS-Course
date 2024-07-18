// let str=''
// for (i=4; i>=0; i--){
//     for (j=i;j>=0;j--){
//         str+='*';
//     }
//     str+='\n';
// }
// console.log(str);



////arr inverse

// const arr=[10,20,30,40,50];
// const rarr=[];

// for (i=(arr.length-1); i>=0; i--){
//     rarr.push(arr[i])
// }


// // rarr.push(1)
// console.log(arr[3]);
// console.log(arr);
// console.log(rarr);


////Mirrored right triangle star pattern


// let rows=4
// let stri=''
// for (i=rows;i>=0;i--){
//     for (j=i;j<=rows;j++){
//         stri+=' ';
//     }
//     for (j=1;j<=i;j++){
//         stri+='*';
//     }
//     stri+='\n';
// }
// console.log(stri);


let rows=5
let stri=''
for (i=1;i<=rows;i++){
    for (j=i;j<=rows;j++){
        stri+=' ';
    }
    for (j=1;j<=i;j++){
        stri+='*';
    }
    for (j=1;j<=i;j++){
        stri+='*';
    }
    stri+='\n';
}

for (i=rows;i>=1;i--){
    for (j=i;j<=rows;j++){
        stri+=' ';
    }
    for (j=1;j<=i;j++){
        stri+='*';
    }
    for (j=1;j<=i;j++){
        stri+='*';
    }
    stri+='\n';
}

console.log(stri);