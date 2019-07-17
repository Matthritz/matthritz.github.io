// String Manipulation

//String can be concatinated with our + operator
var greet = "hello";
var nice = "WELCOME";

console.log(greet + " " + nice); // => logs "hello WELCOME"

// We can access strings with bracket notation using zero index
console.log(greet[0]);   // => logs "h"

// toUpperCase() will convert all characters to uppercase characters, while toLowerCase() does the opposite. 

console.log(greet.toUpperCase()); // => logs HELLO. 
console.log(greet.toLowerCase()); // => logs welcome.

// Splitting Strings - splitting a string by a character and creating a new array out of the sections. We will use the split() method to separate the array by a whitespace character, represented by " ".

var originalString = "How are you?";

// Split string by whitespace character
var splitString = originalString.split(" ");

console.log(splitString);  // logs an array with the individual strings

// String length  -  can be detemined using the .length property

console.log(originalString.length);     // logs 12, the length of 'How are you?'

// slice() extracts a part of a string by index


var alpha = "ABCDEFG3421713HIJKL";   // let's slice the numbers out of our alpha string
var beta = alpha.slice(7, 14);        // our parameters are our starting and ending position of what we want to cut out
console.log(beta);                   //  will log the numbers in our string  3421713

// we can slice backwards with a negative point starting from the end of the string

var theta = alpha.slice(-2);
console.log(theta);           // this slice is only the back two letter K and L


//  replace() this method replaces a specified value with another value in a string

var myWeather = 'This is going be a great day';
var newWeather = myWeather.replace('great', 'terrible');  // our method takes out our first parameter and inserts the second in its place

console.log(newWeather);   //  log This is going to be a terrible day

// indexOf() will tell us the index number inside of a string

var party = "Hello everyone, welcome to my party.";
var p = party.indexOf("welcome");
console.log(p);   
// console prints 16, the index number where the word welcome starts