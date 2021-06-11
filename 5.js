// 5. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]


const findCommon = (list1,list2) => {

    return list1.length > list2.length?list2.filter(x=>list1.includes(x)):list1.filter(x=>list2.includes(x))

}

let test=Array()
    let arr = Array()
    let arr2 = Array()
    for (let j =0; j<100000;j++){
        arr.push(Number.parseInt(Math.random()*1000))
    }
    for (let j =0; j<1000000;j++){
        arr2.push(Number.parseInt(Math.random()*1000))
    }
    test.push(arr,arr2)


 start = Date.now()
findCommon(...test)
 end = Date.now()

console.log(end - start)
