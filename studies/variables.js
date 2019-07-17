/*Variables

Variabels hold a value in momory, such as string, number,
boolean, array, object, or another datatype that can be recalled
when named.  

Variables can be redefined after they are created to hold different
values including different datatypes.

We declare a variable with the keyword var, let, or const.*/


//Declaration

var myDog;          // myDog is now stored as a placeholder
console.log(myDog); // logs undefined because we haven't given a value to the variable

//the variable myName is undefined because we have given it a value


//We can also initialize a varial by giving it a value when we name it

//Initialization

var myDog = "Penny";
console.log(myDog);  // logs "Penny" to the console

//Reassignment

myDog = "Jules";
console.log(myDog);  // logs "Jules" 

// We can assign and re-assign anything to a variable. This cannot be done with constants //
var myDog = 42;
var myDog = false;
myDog = "cat";         // because cat was the last value of myDog
                      // logging will print cat to the console
console.log(myDog);
/*Variables can be declared using three different keywords: 'var', 'let', and 'const' 

  var => can be used to declare a variable  The variable can be changed.  
  var is local scoped, and limited in the scope it was defined in.
    but it is not block-scoped
*/

var city = "new orleans";   // => We declare a variable.

function place() {            
  var city = "miami";      // =>  var can be changed, but this var is being changed strictly inside the scope of this function.
  console.log(city);           
}                          

place();                    // =>  logs "miami"
console.log(city);          // =>  logs "new orleans.  The global scope overides the local var.

/** let and const. 
 * Their scope is not the entire function but rather only the enclosing block,
 * or code wrapped in curly braces {}. 
**/

// let is like var in that it can be reassigned

let plant = 'tree';
function arborial() {
  let plant = "shrub";   // here we a variable inside of a function that changes plant to "shrub"
  console.log(plant);
  
}

arborial();             //  calling our function logs shrub
console.log(plant);     //  but because of scope, logging plant still prints tree
plant = 'bush';         //  here we can still reassign it in its global scope
console.log(plant);     //  logs bush


// let does not hoist and can only be accessed after it was declared. 
// Until then, the variable is considered to be in the 'Temporal Dead Zone'.


/* const is also scope specific but cannot be reassigned. 
  the value can still be manipulated but the const keyword itself is set.
  const does not hoist and cannot be called before it is initialized  
*/

const car = 'Ferrari';
// trying to rename  const car = 'Lamborghini' would throw an error because const cannot be reassigned


/* Hoisting is a process in which all declared variables are carried to the top of their scope
  the variable shoe will be hoisted to the to off the scope .*/ 

console.log(shoe);  // => logs undefined   the code recognizes shoe, but its walue is not yet avaiable in the code
/* this is different than trying to log a non declared variable, 
such as
*
*  console.log(plane);
*
*  because we never declared plane it would throw back a reference error. */

var shoe = 'nike';
console.log(shoe);  // => logs nike. the value is now present in the variable and above the line we are calling it on