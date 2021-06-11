// 6. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']


const findDifferent = (list1,list2) => {

    return [...list2.filter(x=>!list1.includes(x)),...list1.filter(x=>!list2.includes(x))]

}

let test = [['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']]
 test=Array()
    let arr = Array()
    let arr2 = Array()
    for (let j =0; j<100000;j++){
        arr.push(Number.parseInt(Math.random()*10000))
    }
    for (let j =0; j<100000;j++){
        arr2.push(Number.parseInt(Math.random()*10000))
    }
    test.push(arr,arr2)


 start = Date.now()
findDifferent(...test)
 end = Date.now()

console.log(end - start)
