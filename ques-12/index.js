// Q. What is type coercion in javascript ?.
/*
Defn:Type coercion is the automatic conversion of values from one data  type to another during certain  operations  or comparisons.


=> uses of type coersion
1. Type coercion can be used during  String and Number  concatenation.
2.Type coercion can be used while using comparison operator.
*/

let string = "42";
let number = 42;
let boolean = true;
let nullValue = null;

// Type coercion - automatic  conversion
console.log(string + number); //output:  "4242"
console.log(number + boolean); //output:43
console.log(number == string); //output: true
console.log(boolean == 1); //output: true
console.log(boolean + nullValue); //output:1
