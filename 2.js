// 2. Please write a function that filters out numbers from a list

const filterNumbers = (list) => {
    return list.filter((step) => typeof step === "number");
}

const filterNumbers2 = (list)=>{

    let filteredList = Array(0)
    let y = 0;
    for (let x = 0 ; x<list.length; x++){
        if(typeof list[x] === 'number'){
            filteredList[y++]=list[x];
        }
    }
    return filteredList

}


let test = "candy 23 ".repeat(22222222).split(" ").map(step=>step==='23'?23:step);

let start = Date.now();
filterNumbers2(test)
let end = Date.now();

console.log("filterNumbers2: ", end-start)

start = Date.now();
filterNumbers(test)
end = Date.now();

console.log("filterNumbers: ", end-start)






