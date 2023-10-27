//Q. what is the difference between null and undefined in JavaScript ?

let value1 = 0;

let value2 = "";

/*
(A stand  on the wall with also a paper holder) Means there is a valid variable
 with also a value of data type number.
 */

let value3 = null;

/*
 (There is just a stand on the wall)  Means the is a valid variable  with the value of no data type. 
 */

let value4;
/*
(There is nothing on the wall)  Means  variable is incomplete variable and not assigned anything.
*/

let undefinedVariable; //no assigned value
console.log(undefinedVariable);
//output: undefined

/*
undefined: When  a variable is declared " but  has not been assigned a value  ", it is automatically initialised with undefined.
1.undefined can  be used  when you dont have value right now,  but you will get it after some logic  or operation.
*/

let nullVariable = null;
console.log(nullVariable);
//null

/*
null:  null variables are intentionally assigned  the "null " value.
1.Null can be used when you are sure you do not have  any particular variable.

 */
