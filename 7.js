// 7. Please write a function that transforms an object to a list of [key, value] tuples.
// example input { color: 'Blue', id: '22', size: 'xl' }
// example output [['color', 'blue'], ['id', '22'], ['size', 'xl']]

const transformToList = obj=>Object.entries(obj);

const transformToList2 = obj=>{
    names = Array()
    let i=0
    for (const x in obj){
        names[i++] = [x,obj[x]] 
    }
    return names

}

const test = { color: 'Blue', id: '22', size: 'xl' }

console.log(transformToList(test))
console.log(transformToList2(test))