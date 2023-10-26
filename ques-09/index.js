//Q. what is the difference betweenn primitive and non-primitive data types. ? => V.imp
/*
Types of Datatypes
1.Primitive
2. Non-Primitive


Primitive
1.Numbers
2.Strings
3.Booleans
4.undefined
5.Null

Non-Primitive
1.Object
2.Array
3.Function
4.Date
5.RegExp

*/

/*

=> Primitive data types can hold only "single" value.
=> Primitive  data types  are "immutable" , meaning  their value once assigned, cannot be changed.
=> Primitive data types are simple data types

*/

//Number
let age = 25;
age = 30;
// age = 25 has different memory address and age = 30 has different memory address.

/*
=> Non - Primitive data types can hold  multiple value.
=> They are mutable , their value can be changed.
=> Non-Primitive data types are complex data types.
*/

//Non -Primitive data types

// Array
let oddNumber = [1, 2, 3];
// even if we change the value of of 2 to 4 it will be saved in same memory address.

//Object
let person = {
  name: "Ashutosh",
  age: 22,
  grades: ["A", "B", "C"],
  greet: function () {
    console.log(this.name);
  },
};
