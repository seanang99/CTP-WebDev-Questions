/**
 * Topic: Arrays, Loops
 * Challenge: Easy
 * Question 11
 */

 function reverse(word) {
  let result = "";
  for (let i = word.length - 1; i > -1; i--) {
      result = result + word[i];
  }
  return result;
}

console.log(reverse("sailor"));
console.log(reverse("racecar"));

/**
 * Final Answer:
 * - sailor -> rolias
 * - racecar -> racecar 
 */