// 1. Please write a function that reverses a string

const reverseString = (reverseThis) =>{

      return  reverseThis.split("").reverse().join("")
}

const reverseString2 = (reverseThis)=>{

    let stringArray = Array(0)

    stringArray = reverseThis.split("");

    let p=0,q =stringArray.length-1;
    while(p<q){
        let helper = stringArray[p];
        stringArray[p++] = stringArray[q];
        stringArray[q--] = helper;
    }
    return stringArray.join("")

}


const test = "candy shop".repeat(100000);

let start = Date.now();
reverseString(test)
let end = Date.now();

console.log("reverseString: ", end-start)

start = Date.now();
reverseString2(test)
end = Date.now();

console.log("reverseString2: ", end-start)
