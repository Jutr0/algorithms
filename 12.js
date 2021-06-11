// 12. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

const objWithoutKeys = (negKeys,obj)=>{

    let names = Object.keys(obj);

    const wantedKeys = names.filter(step=>!negKeys.includes(step));

    let output = Object();

    for(const x of wantedKeys){
        output[x] = obj[x];
    }

    return output
}

const test = [['color', 'size','id'], { color: 'Blue', id: '22', size: 'xl' , age:18}]

console.log(objWithoutKeys(...test))