//////////////////SECTION 1///////////////////
// 1. Interpolation and concantenation both strings. Interpolation, however it is used to insert the value of a variable within a string to calculate an unknown with a known. Concantenation is combining two strings.

// DRY stands for Don't Repeat Yourself. This is important to pay attention to because it is important to eliminate redundancy for efficient coding. It's also respectful to anyone else viewing your code.

// You can use functions, classes, boilerplates, libraries, etc are examples of ways to practice DRY coding.

// const (constant) variables that always stay the same
// Kyle's Feedback * const declares an immutable variable meaning it cannot be reassigned after declaration

// let (range) 
// Kyle's Feedback * let declares a mutable variable meaning it can be reassigned after declaration

// var (variable) reassignable 
// variable
///////////////////SECTION 1///////////////////


///////////////////SECTION 2///////////////////
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

console.log(a < b)
console.log(c > d)
console.log('Name' === 'Name')
console.log(a < b && b < c)
console.log(a == a && a < d)
console.log(e !== "Kevin")
console.log(48 == '48')
console.log(f !== true)

let g = 0;
console.log(g);

g = b + c;
console.log(g);


// I used let in case I want to reassign g to a new value. I also ran it using var, but it gave the same answer. 

// If you do not use const, let, or var, the variable will become global, meaning it will relay this same message to the rest of my code. This would be difficult for debugging. It does not show an error. I ran bash w/o a variable, const, let, and var and it gave me the same answer.

// 10 = g will give you an error. 
// 10 is not equal to 53 + 57
// Kyle's Feedback * this errors not because they are not equal but rather the value of 10 cannot be reassigned a new value, remember the single = reffers to assignment and the === checks for equality


// Bonus question
// 4 < (53 or false) if not then !false && 'Kelvin'
// && 57 > 4 + 16

// a _ (b || f) _ !f && e _ c
///////////////////SECTION 2///////////////////


///////////////////SECTION 3///////////////////
// INFINITE LOOP: It is an infinite loop because the value of runProgram is set to true allowing it to continue to run as a truthy. It is attempting to assign a new value as false, when it has already been assigned, therefore will run infinitely.

// let sets the value of letters to A
// let sets the value of i to 0
// while sets a loop of i to repeat until it hits 20
// letters += is the same as letters = letters + A
// i++ increases the value of i by 1 every time
// } closes the loop
// console.log(letters) outputs the value of letters
// EXPECTED RESULT: 21 A's because it includes 0
// RESULT: AAAAAAAAAAAAAAAAAAAAA

let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";	i++;
}

///////////////////SECTION 3///////////////////
// The while loop is conditioned to true, making the loop run indefinitely. The program will continue to run continuously becuase it has nowhere to exit. 

// This is also an infinite loop because the const is set to always true. Once the value is set it cannot be modified. 

// Q is set at the value of 20
// When it enters a while loop, it will always be executed as long as q stays greater than 10
// Within the console log it gives an expected value of q minus 1 every time and will continue to be executed until it hits 11.
// the expected output is:
// 20
// 19
// 18
// 17
// 16
// 15
// 14
// 13
// 12
// 11

// let letters = "A";
// let i = 0;

// while (i < 20) {
// 	letters += "A";
// 	i++;
// }

// console.log(letters);


// letters are set to a value of A, i is set to a value of 0
// Within the while loop, i will always be executed as long as it is less than a value of 20
// += means that the left side of the equation will increase in increments of 1 
// The loop will continue to run until it hits 21 because 1 is counted as 0.
// The output will look like: "AAAAAAAAAAAAAAAAAAAAA"
///////////////////SECTION 3///////////////////


///////////////////SECTION 4///////////////////
// The for loop is set of x amount of times, the while loop is set to run indefinietely following the set structure. Both will output the same code.

// The first part of the control panel is: let i = 0 meaning i is set to a value 
// The second part of the control panel is: i < 100 means let the code run until it hits 100
// The third part of the control panel is: console.log('Without you, today\'s emotions are the scurf of yesterday\'s'); 
// } meaning that when node is ran, then it will print out the message ''Without you, today\'s emotions are the scurf of yesterday\'s'

for (let i = 0; i <1000; i++) {
console.log(i);
}

for (let i = 1; i <= 10; i++) {
    console.log("The value of i is: " + i + " of 10");
  }
///////////////////SECTION 4///////////////////


///////////////////SECTION 5///////////////////
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

// Iterate over the StarWars array and print each element to the console.
for (let i = 0; i < StarWars.length; i++) {
    console.log(StarWars[i]);
  }

  // Iterate over the StarWars array again and print each character's name as well as the value of i.
  for (let i = 0; i < StarWars.length; i++) {
    console.log(`[${i}] ${StarWars[i]}`);
  }
///////////////////SECTION 5///////////////////
