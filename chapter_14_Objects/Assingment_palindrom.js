let v = "nitin";

// let y = x.split("").reverse().join("")
// if(v===y){
//     console.log(` ${v} Its Palindrom series ${y}`)
// }

// console.log("----------------")

let j = Array.from(v);
console.log(j);
let newArr = j;
let revArr ='';

for(let i = newArr.length - 1 ; i>=0; i-- ){
    revArr += newArr[i];
    // revArr = newArr[i] + revArr;
}
console.log('Rev - ',revArr);