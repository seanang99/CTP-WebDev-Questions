/**
 * Topic: Objects, Array, Loops
 * Challenge: Easy
 * Question 10
 */

 function countAmountOfEachCharacter(inputString) {
  const returnObject = {};

  // loop over input string
  for (let i = 0; i < inputString.length; i++) {
    // check if character has been seen before
    if (returnObject.hasOwnProperty(inputString[i])) {
      // increase its count by 1
      returnObject[inputString[i]] += 1;
    } else {
      // add it to the object with a count of 1
      returnObject[inputString[i]] = 1;
    }
  }

  return returnObject;
}
