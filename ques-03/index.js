//Q. What is scope in javascript? => v.imp
/*
ans: 
defn: Scope  => Scope determines where the variables are defined and where they can be accessed.
There are three types of scope
1.global scope
2.function scope
3.block scope  or local scope 

1. global scope => in this variables is defined at the top of program
2.function scope => variables are deined inside function.
3.local or block scope


*/

// Global - accessible anywhere
let globalVariable = "global";

greet();

function greet() {
  //Function - accesible inside function only
  let functionVariable = "function";
  if (true) {
    //Block - accessible inside block only
    let blockVariable = "block";
    console.log(blockVariable); // Output: block
    console.log(functionVariable); //Output: function
    console.log(globalVariable); // Output: global
    //at block level all 3 varibles are accessibel
  }
  console.log(functionVariable); //Output: function
  console.log(globalVariable); // Output: global
  // only function and global variable is accessibe inside function variable
  // the block variable is not accessible outside its own block
}
console.log(globalVariable); //  Output: global
//only global variable can be assible anywhere
// function varible are not accessible outside there function
