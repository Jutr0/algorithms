// 10. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

const valueAtPath=(path,obj)=>{

    let output = obj

    for (const x of path){
        
        if(output[x]!==undefined){
            output = output[x];
        }
        else return undefined
    }
    return output

}

const test = [['a', 'b', 'c', 'd'], { a: { b: { c: { d:{e:23}, x:22 }, x:32 } } }]

console.log(valueAtPath(...test))