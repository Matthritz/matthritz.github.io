// Functions - a block of code designed to perform a particular task.

// Functions must first be named like variables

var num1 = 1;
var num2 = 2;

function add(a, b) {    // our function "add" takes a and b as parameters, or placeholders.
  return num1 + num2;   // num1 and num2 are our arguements.  The actual equation will run these values
}
console.log(add());  // we call our function with its name followed by ()   This logs 3.

  
// The paramaters are not necessary to run a function

function subtract() {
    return num2 - num1;   
}
console.log(subtract());  // still logs 1 to the console without parameters

// Function do not require a return statement

function red(){             // here we have a function with no parameters or a
    console.log('red');     // return statement in our function   
}

red();    // logs red to the console

// A Function can also be assigned to a variable
// Here we have a function expression called subtractor.

var subtractor = function (c, d) {console.log(c - d)};  
//subtractor is now a function that will console log the difference of two values..

var copier = subtractor(9, 5);  // this console logs 4 because our keyword calls a function to log the difference of these numbers

//we call our function the same way, by naming it followed by ()

/* Functions have scope.  
*Any variable declared outside of a function belongs to the global scope, 
*and is therefore accessible from anywhere in your code. 
*Each function has its own scope, and any variable declared within that function
*is only accessible from that function and any nested functions */

var age = 13; //this value is created in the global scope. it can be used anywhere in our code

function getOld(){           // The variables created inside of this functions brackets have closure and are limited to this area
    var weight = 200;        // the variable created inside the function is block scoped and cannot be called outside of the function
    return age + weight;     // we can still access age because it was created in our global scope.
    
}
console.log(getOld());   // will still console log our global scope created function and log 213
console.log(weight);    // will return a reference error because weight is restricted to its function block 