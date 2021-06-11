// 8. Please write a function that transforms a list of [key, value] tuples to object. // reverse of task 7
// example input [['color', 'blue'], ['id', '22'], ['size', 'xl']]
// example output { color: 'Blue', id: '22', size: 'xl' }

const transformToKeyValue = list=>{
    return Object.fromEntries(list)
}
const transformToKeyValue2 = list=>{
    let obj = Object();
    for(const x of list){
        obj[x[0]] = x[1];
    }
    return obj
}

const test = [['color', 'blue'], ['id', '22'], ['size', 'xl']]

console.log(transformToKeyValue(test))
console.log(transformToKeyValue2(test))