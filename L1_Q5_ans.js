/**
 * Topic: Loops
 * Challenge: Medium
 * Question 5
 */

let height = 6;
let counter = 1;
let result = "";

for (let i = 0; i < height; i++) {
  for (let j = 0; j < counter; j++) {
    result = result + "#";
  }
  counter = counter + 2;
  result = result + "\n";
}

console.log(result);
