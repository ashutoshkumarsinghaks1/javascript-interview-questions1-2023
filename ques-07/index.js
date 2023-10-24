// Q. What are varibles ? What is the difference between var , let , const , keywords ? => V.imp
// defn: Variables are used to store the data.
var count = 10;

/*
Scope :
Sope of  "var" inside the function
Scope of "let" inside the block only
Scope of "const" inside the block only
*/
//****  VAR  ******** */
// var creates a  " function-scoped " variable
//using var
function example() {
  if (true) {
    var count = 10;
    console.log(count);
    //output: 10
  }
  console.log(count);
}
example();
// even if we have defined the variable inside the "if block" it is accessible outside it as it is function-scoped not block scoped
//NOte: " In the programming world block scope is the better way of writing the code as it gives a clearity of the life of variable  "
// THEREFORE: better way defining is by using let keyword.
//***** LET   ****** */
//  let create a "block-scoped variable"
// using let
function example1() {
  if (true) {
    let count1 = 10;
    console.log(count1);
    //Output: 10
  }
  //console.log(count1);
  //output:ReferenceError: count1 is not defined
}
example1();
//Note: Let keyword is more popular because it will not create confusion about the scope the the variable.

//**** CONST  ******
// defn: const  can be assigned only once and its  value cannot be changed afterwards.
//using const
const z = 10;
z = 20;
// this will result an error
//output: TypeError: Assignment to constant variable.
console.log(z);
