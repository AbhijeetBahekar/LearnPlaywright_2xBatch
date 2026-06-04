let Str = 'BAT';
arr = [...Str];
// console.log(arr);
let newArray = arr
console.log("Created array from string ", newArray);
let reverseArr = '';

for (let a = newArray.length - 1; a >= 0; a--) {
    // console.log(newArray[a]);
    reverseArr += newArray[a]; 
}
console.log(Str);
console.log(reverseArr);
console.log(`String value present is - "${Str}", reversed is - "${reverseArr}".`)
