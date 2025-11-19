// while loop
// let a = 3
// while (a >= 0) {
//     console.log(a);
//     a--
// }

// 1. 3,4,5,6
// 2. 3,4
// 3, 3,3,3,3
// 4. none of these
 
// do {
//     console.log(a);
//     a++
    
// } while (a > 5);


// Declaration
// function Sum(a, b, c, d){  // parameter
//     console.log('function calling...');
//     console.log(a + b);
//     console.log(c - d);

    
//     // Sum() // calling function
    
// }
// Sum(10, 20) // argument
// Sum(20, 20) // argument
// Sum(40, 20) // argument
// Sum(50, 20) // argument
// Sum(60, 20, 10, 20) // argument


// Function Expression

// let Sum = function Add(a, b){
//     return a + b
// }

// console.log(Sum(10, 20))

// // Arrow Functionn ES6 - ECMAScript 6
// let Sum1 = (a, b) => a + b
// console.log(Sum1(20, 40));

// Call Back Function ******


// function calculate(n1, n2, callback){
//   const result = n1 + n2;
//   callback(result);
// }
// function printResult(output){
//   console.log(`The result is: ${output}`);
// }
// calculate(10, 25, printResult)



// Higher Order Function
// function random(){
//     return Math.floor(Math.random() * 100);
//  }
//   function player(name, id){
//     return `${name} and ${id()}`
//  }
//   const p1 = player("Shubham", random);
// console.log(p1);



// Generate Random Number
// let a = Math.floor(Math.random() * 10);
// console.log(a);

// IIFE - 
(function(){
    console.log("hiii");
    
})()
