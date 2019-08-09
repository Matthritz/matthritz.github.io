// Control Flow

/* Conditional statements are used to decide the flow of execution based on different conditions.
If a condition is true, you can perform one action
and if the condition is false, you can perform another action.
You can chain as many if else staments as you want.
*/

// If, Else if, Else

function testAge(a) {
  if (a > 21) {
    // this is the first test passed through our code
    
    return "Have a Drink!";      // if a > 21 then the code stops here, 
      } else if (a === 21) { 
    //if the first condition is false, our code check the next phase.    
        
    return "Old Enough";         // if true we get a new return of "Old Enough"
  } else {
    // the else statement runs if no other conditions were met.  
    
    return "Do Not Serve";       // logs if no other conditions were met
  }
}

console.log(testAge(15));

/* Switch statements - The switch statement evaluates an expression.
The value of the expression is then compared with the values of each case in the structure.
If there is a match, the associated block of code is executed. 
*/

var fruit = "Apples";
// we declare a variable, fruit, with the string value of "Apples"

switch (fruit) {
  // our switch statement will check our fruit variable against possible matches
  
  case 'Apples':
    // the case statement is the value checked against.  in this case 'Apples' === "Apples"
    
    console.log('Apples are Ripe.'); // logs because switch statement matches
    break;
    //our switch case has a break to denote the separtation of cases
  case 'Oranges':
  case 'Bananas':
    // here we have two other cases that share the same outcome
    
    console.log('We are out of Oranges and Bananas.');  // would log if we switched our fruit to Oranges or Bananas.
    break;}
    


/* An if-then-else statement can test expressions based on ranges of values or conditions, 
* whereas a switch statement tests expressions based only on a single integer, enumerated value, or String object.
*
* If-else conditional branches are great for variable conditions that result into a boolean, 
*whereas switch statements are great for fixed data values.*/