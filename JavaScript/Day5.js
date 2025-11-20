// function OuterFunction(){
//     let name = "DPG"
//     function innerFunction(){
//         console.log(name);
//         function Abc() {

//         }
//         Abc();
        
//     }
//     innerFunction()
// }

// // OuterFunction()


// local and session storage


// localStorage.setItem("name", "DPG")
// localStorage.setItem("Data", "BCAFSD2025Sem1")

// localStorage.getItem('name')


// Error
// console.log(a);
// let a = 10;


// arr = [1,2,3,4,5]
// console.log(arr[9]);


// let num = 1
// result = num.upperCase()
// console.log(result);


// const arr = [10, 20, 30, 40, 50];
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
       
// }
// concat
// const arr1 = [1,2,3,4,5]
// const arr2 = [6,7,8,9,10]
// const arr4 = [6,7,8]

// let arr3 = arr1.concat(arr2, arr4)
// console.log(arr3);
// arr3.fill(0)


// arr3.push(100)
// arr3.push(110)
// console.log(arr3);

// arr3.pop()

// console.log(arr3);

// arr3.reverse()
// console.log(arr3);


// What is Map, filter and reduce
const arr = [1,2,3,4,5,6]

// arr.map((index)=>{
//     console.log(index);
    
// })

let data = arr.filter((idx) => idx % 2 === 0)
console.log(data);
console.log(arr);


// reduce

let sumrOfArray = arr.reduce((prevValue, currentValue) => {
    return prevValue - currentValue
},0)
console.log(sumrOfArray);