/* Data types

Datatpyes are the values we can assign. There are two kinds of datatypes, Simple and Complex.
Simple data types are atomic, mutable, and are copied copied by value.
  operations on simple data types sreate new simple data types and do not alter the original.

Complex data types can collect other values and grow indfinitely.  They are copied by reference and may be altered.


These are simple datatypes*/

// 1.) Number  -  a numeric value

var number = 12;


// 2.) String  -  a word or words denoted by quotaion marks, either single '' or double "".

var string = "words";
var singleQuotes = 'also words';

// 3.) Boolean  -  a true or false

var boolean = true;


// 4.) NaN  -  This property indicates that a value is not a number.

console.log(isNaN(string)); // => prints true because our var myString is not a number.


// 5.) null  -  Intentional absence of any object value. It is supposed to be something that doesn't exist.

var blank = null;
console.log(blank);  //=> prints null


// 6.) undefined  -  if a variable is not assigned a value it is undefined

var myDefinition;
//console.log(definition); would print reference error undefined because we have not assigned a value


// Complex Data Types


// 7.) Array  -  arrays can hold multiple different datatypes. It is denoted with [] brackets.  Arrays can hold other arrays.
var myArray = [1, 'two', [true, {}]];
// this array hold a string, a number, and another array containing the boolean true, and an object literal.
// arrays have a zero index and can be accesed using index notation
console.log(myArray[1]); // => logs 'two'  the second object in the array.  

// 8.) Object  -  like an array, an object is a collection, but is accessed through key-value pairs. Denoted with {}
var myCat = {
  name: 'Luna',
  breed: 'tuxedo',
  age: 11
}
// values can be accessed with dot or bracket notation.

console.log(myCat.name);   // => logs Luna to console
console.log(myCat.breed);  // => logs tuxedo


// 9.) Functions  -  Functions are structure that use and manipulate our values.  

function add(param1, param2) {
  console.log(param1 + param2);
}
// this function named add takes the parameters param1 and param2 and adds them to gether and console logs the sum.

// We can call that funtion and substitute the parameters for values.
console.log(add(5, 8)); // => logs 13


// 10.) Infinity  -  this value is always greater than any number.  this value behaves the same as infinity, any positive number multiplied by Infinity equals Infinity, and any number divided by Infinity equals 0.

console.log(Infinity > number); // => logs true 

// -Infinity is lower than any number
console.log(-Infinity < .000000001); //  => logs true

/* All primitive datatypes are immutable, they cannot be altered. The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered. */

/* While simple or primative datatypes can only contain a single value, Complex datatypes, such as arrays, objects and functions can contain any size.*/

/* Primitives are copied by value */
var exp = 1;
var tep = exp;      //  => the value is copied to tep
tep = 2;            //     changing the value of tep doesn't effect what is stored in exp.
console.log(exp);  //  => still logs logs 1

/* Complex are copied by reference */
var ret = {
size: "small"
};

var fur = ret;          // now both variables point at the same object
fur.size = "large";     // changing the value in fur will change the reference in ret
console.log(ret);       //returns size: "large" because the refernce value was changed