//Q. What is the use of typeof operator ?
/*
defn:
typeof operator is uesd to determine the "type " of each value.
 */

let num = 42;
let str = "Hello , world";
let bool = true;
let obj = { key: "value" };
let arr = [1, 2, 3];
let func = function () {};

// using typeof
console.log(typeof num); //output: Number
console.log(typeof str); //output:string
console.log(typeof bool); //output:boolean
console.log(typeof obj); //output:object
console.log(typeof arr); //output:object
console.log(typeof func); //ouput:function
console.log(typeof undefinedVariable); //output: undefined

/*
Note: Real Application use -> typeof operator can be  used to validate the data received from external sources(API) 
*/
