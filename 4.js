// 4. Please write a recursive function that flattens an list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

const flattenList = (list)=>{
    let output=Array();

    for(const x in list){
        if(Array.isArray(list[x])){
            output = [...output,...flattenList(list[x])]
        }
        else {
            output.push(list[x])
        }
    }
    return output



}


const test = [[2, [4, [44,5,6]]], [4,[5,[3,[2,[3,1],3],6]], [[2,4], 4], 5]]

console.log(flattenList(test))

