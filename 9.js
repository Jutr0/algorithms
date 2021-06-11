// 9. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

const makeTouples = (list1,list2)=>{

    let output = Array()

    if(list1.length<list2.length){
        for(const x in list1){
            output[x] = [list1[x],list2[x]]
        }
    }else{
        for(const x in list2){
            output[x] = [list1[x],list2[x]]
        }
    }
    return output

}

const test = [[1,2,3,3,4,5,4,4,2,12,3], [4,5,6,7,12,123,1238,2]]

console.log(makeTouples(...test))

