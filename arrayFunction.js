let arr = [1,334,452,213,12,3,7];

// let myFunc = (ele, ind, arry)=>{
//     console.log(ele*2)
//     // console.log(arry)
// }
// arr.forEach(myFunc)

// function myFunc2(ele){
//     return ele * 2
// }
// const arr2 = arr.map(myFunc2)
// console.log(arr2)

function filterNumber(ele){
    return ele < 10;
}
const filArray = arr.filter(filterNumber)
console.log(filArray)



// console.log(arr.pop())
// console.log(arr)

// let arr_len = arr.length

// for(i=0 ; i <= arr_len; i++){
//     console.log(arr[i])
// }

// const incrOrder = (a, b)=>{
//     return a - b
// }

// console.log(arr.sort(incrOrder))

// arr.splice(2,2,45,23)
// arr.pop()
// arr.push(74)
// arr.unshift(50)


// console.log(arr)
