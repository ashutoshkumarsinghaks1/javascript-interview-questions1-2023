//Q  What is operator precedence ?
/*
As per operator precendence operator with higher precdence are evaluated first.
BODMAS RULE => BRACKET , ORDER , DIVISION , MULTIPLICATION , ADDITION , SUBTRACTION
*/
let a = 6;
let b = 3;
let c = 2;

//Bracketof-Divison-Multiplication-Add-Sub
let result = a + b * c + (a - b);

console.log(result);
//output:15
