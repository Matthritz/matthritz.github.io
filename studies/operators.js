// Operators

/* Assignment operator - assigns a value to its left operand based on the value of its right operand. The basic assignment operator is = */

var x = 5;    // = is assigning the value of 7 to x
var y = 2;    // = is assigning the value of 3 to y

// We also have assignment operators that also perform an operation

x += 3;         // adds 3 to 5 and reassigns the value at x to 8
console.log(x);

// this also works with -, *, /, and

x *= 2;
console.log(x);  // logs 16

x /= 2;
console.log(x);  // logs 8

x -= 3;
console.log(x);  // logs 5

/* Arithmetic operators - used to perform arithmetic between variables and/or values */

// Addition
console.log(x + y); // logs 7

// Subtraction
console.log(x - y); // logs 3

// Multiplication
console.log(x * y); // logs 10

// Division
console.log(x / y); // logs 2.5

// Modulo
console.log(x % y); // logs 1 (this is the remainder after dividing)


// Comparison operators - compares two values and returns a boolean
  
// Greater than
console.log(x > y); // logs true

// Greater than or equal to incorporates the value in comparison >= 

console.log(x >= y + 3);  // logs true bcause 5 is equal to 3 + 2

// Less than
console.log(x < y); // logs false
// less than or equal to incorporates the value in comparison <= 

// Less than or equal to incorporates the value in comparison <= 

console.log(x - 3 <= y);  // logs true bcause x - 3 = y

// Compaison Operators
// Strict comparison takes into account value and type   returns a boolean value
//Strict equal (===)	Returns true if the operands are equal and of the same type.
console.log(x === 5);  // => logs true
console.log(x !== 9);// => logs true because our bang operator switched the truthiness of the comparison


// Logical operators - return a boolean expression 

// &&  the and operator requires both equations to be true
console.log(1 < 2 && 4 > 3);  // => since both are true, returns true

// || the or operater requires either equation to be true
console.log(1 > 2 || 4 < 3); // => true because while 1 is less than 2, 4 is greater than 3


// Unary operators 

// The bang operator comes before the operand. It converts the operand into it's boolean equivalent before negating it.
console.log(1 != 0);  // logs true    1 is not equal to zero

//  The type of operator comes before the operand. It returns a string indicating the data type of the operand.
console.log(typeof 2);  // logs number
console.log(typeof true); // logs boolean


// Ternary operator (a ? b : c)
// Operator that takes three operands. This operator is frequently used as a shortcut for the if statement.

var age = 19;             
// here we declared age to be the number 19

var drinker = (age < 21) ? "Do Not Serve": "What are ya drinkin/'";     // our ternary operator checks our age variable against a true/false set of conditions
        //  our condition     if true           if false 

console.log(drinker);  // this will log "Do Not Serve", because age is less than our condition of 21