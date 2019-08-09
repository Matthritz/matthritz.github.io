/** Loops create a repeatable action to perform over a set of values. 
* We use loops to iterate through data.  Loops repeat an action a 
* number of times.  There are many types of loops suitable for different 
* situations or data types.  Some situations would be better suited by certain
* loops over others.
*/

// For Loop - loops through a block of code a number of times
// Setup   for (starting point; ending condition; incrementation) {}

var pets = ['cat', 'dog', 'rabbit', 'horse', 'snake'];

for (let x = 0; x < pets.length; x++) {  // this loop works through the array by 1 every cycle until the end of the array

       console.log(pets[x]);  // we log our variable at its bracket notation position of x
}   // Console logs cat, dog, rabbit, horse, snake.  

// We can also loop backwards by using our -- operator

for (let x = pets.length - 1; x > 0; x--) {   // here, our starting point is the last element in the array
                                              //and our stopping point is the first element, decrementing as we go
  console.log(pets[x]);
}   // console logs snake, horse, ..., through cat.


// While Loop - checks if an expression evaluates to true and runs as long as it says true.

var x = 4;

while (x < 7) {
  x++;
}

console.log(x);
// logs the value of x which now is 7

// we can run these backwards also

let y = 5;

while (y > 0) {
    y--;          
}

console.log(y);  // logs the new value of y, 0

/* We use a for loop when we know how many times the loop should run.
* If wwe want the loop to break based on a condition other than the number of times it runs,
* we should use a while loop */


// For In Loop - used for looping through objects. 

var array = [];
var object = {a: 1, b: 2, c: 3};

for (var property in object) {
  array.push(object[property]);
}

console.log(array);    // logs 123 by adding the object properties to the array




