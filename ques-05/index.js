//Q. What is Hoisting in javascript ? => v.imp
/*
ans:
Hoisting  is a javascript behaviour where functions and variable declarations  are moved to the top of their respective
scopes during compilation phase.


HOISTING:
1.FUNCTION HOISTING 
2.VARIABLE HOISTING
*/

//Function Hoisting
myfunction(); //here function is called first then we are decalring and defining the function

function myfunction() {
  console.log("Hello!");
}
//Output :Hello!
// here hoisting will move function declaration to the top of the code.

/*
Now the question is how the function is called even before declaring and defining it .This is possible with Hoisting
Javacript engine executes the code in top-down approach. when we run the code the javascript engine will automatically
move the method/function declaration to the top of the code.
*/

//Variable Hoisting
x = 10;
console.log(x);
//Output: 10
var x;
// here hoisting will move the variable declaration  " var x "to the top of code
//************* */
// let keyword does not allow hoisting
y = 5;
console.log(y);
//output: ReferenceError: Cannot access 'y' before initialization
let y;
