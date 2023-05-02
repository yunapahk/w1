////////////////////////////////
// Easy Going
for (let i = 1; i <= 20; i++) {
    console.log(i);
  }  
////////////////////////////////


////////////////////////////////
// Get Even
for (let i = 0; i <= 200; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
////////////////////////////////


////////////////////////////////
// Fizz Buzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
////////////////////////////////


////////////////////////////////
// Wild Wild Life
// 1. plantee[2] = plantee[2] + 1;
// 2. wolfy[3] = "Gotham City";
// 3. dart.push("Hawkins");
// 4. wolfy[0] = "Gameboy";
////////////////////////////////


////////////////////////////////
// Yell at the Ninja Turtles
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

for (const turtle of ninjaTurtles) {
  console.log(turtle.toUpperCase());
}
////////////////////////////////


////////////////////////////////
// Methods, Revisited
// 1. favMovies.sort();
// 2. favMovies.pop();
// 3. favMovies.push('Guardians of the Galaxy');
// 4. favMovies.reverse();
// 5. favMovies.shift();
// 6. favMovies.unshift('The Lion King');
// 7. const djangoIndex = favMovies.indexOf('Django Unchained');
// favMovies.splice(djangoIndex, 1, 'Avatar');
// Yes, it will permanently delete the array
// 8. const middleIndex = Math.floor(favMovies.length / 2);
// const lastHalf = favMovies.slice(middleIndex);
// 9. console.log(lastHalf);
// 10. console.log(favMovies);

// console.log(favMovies.indexOf('Fast and Furious')); // -1
// It is unusual that a change was allowed even though const had already set the variable. Const prevents reassignment, not the content of the variable. 
////////////////////////////////


////////////////////////////////
// Where is Waldo
whereIsWaldo.splice(1, 1);
whereIsWaldo[2].splice(2, 1, "No One");
console.log(whereIsWaldo[3][1][1]); 
////////////////////////////////


////////////////////////////////
//  Excited Kitten
const kittyTalk = [
    "...human...why you taking pictures of me?...",
    "...the catnip made me do it...",
    "...why does the red dot always get away..."
  ];
  
  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      let meow = Math.floor(Math.random() * kittyTalk.length);
      console.log(kittyTalk[meow]);
    } else {
      console.log("Love me, pet me! HSSSSSS!");
    }
  }
////////////////////////////////


////////////////////////////////
//  Find the Median
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// Sort
nums.sort((a, b) => a - b);

// Check length
const middleIndex = Math.floor(nums.length / 2);

    if (nums.length % 2 === 1) {
    console.log(nums[middleIndex]);
    }
    else {
    console.log((nums[middleIndex - 1] + nums[middleIndex]) / 2);
    }
////////////////////////////////

// I was having a lot of trouble trying to move from local to remote. During the Mon office hours, Winston said it would be alright to just upload them, but it was saying that I needed to merge so I was not able to commit any of the messages in quotations. 