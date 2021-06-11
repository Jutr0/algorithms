// 11. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

const compareObj=(obj,obj2)=>{

    const names1 = Object.keys(obj)
    const names2 = Object.keys(obj2)

    if(names1.length!==names2.length)return false

    for(const x of names1){
        if(obj[x]!==obj2[x]) return false;
    }
    return true

}

const test = [{ a: 'b', c: 'd' }, { c: 'd', a: 'b' }]
const test2 = [{ a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }]

console.log(compareObj(...test))
console.log(compareObj(...test2))