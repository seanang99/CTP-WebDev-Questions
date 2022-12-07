/**
 * Topic: Arrays, Loops, Math
 * Challenge: Medium
 * Question 9
 */

 var fizzBuzz = function(n) {
  const output = [];
  for(let i = 1; i <= n; i++) {
      let input = "";
      if  (i % 3 == 0)
          input += "Fizz";
      if (i % 5 == 0)
          input += "Buzz";
      output.push(input ? input : i.toString());
  }
  return output;
};
