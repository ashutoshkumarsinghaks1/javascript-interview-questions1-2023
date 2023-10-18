//Q. what is  JavaScript? What is the role of javascript engine? => v.imp
/*
ans:
javascript is a programming language that is used for  converting  static web pages  to interactive and 
dynaic  web pages.


A javascript  Engine  is a program present in a web browser that executes  Javascript Code.

**********************
JAVASCRIPT ENGINES
1. V8 for chrome
2. spider-monkey  for firefox
3. javascript-core  for safari
4. chakra for edge.
*/

// Get a reference to button element
var button = document.getElementById("myButton");

// Add a click event listener to the Button
button.addEventListener("click", function () {
  alert("Button was Clicked!");
});
