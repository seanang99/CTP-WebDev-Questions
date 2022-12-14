/**
 * Topic: Arrays
 * Challenge: Easy
 * Question 7
 */

const assurances = ["Salvation", "prayer", "Victory"];
assurances[1] = "Answered prayer";
assurances.push("Forgiveness");
assurances.push("Guidance");

let text = "";
function print(item, index) {
  text += ( index +1 ) + ": " + item + "\n";
}

assurances.forEach(print);

console.log("There are " + assurances.length + " assurances in LoA:");
console.log(text);

/**
 * Final Answer:
 * There are 5 assurances in LoA:
 * 1: Salvation
 * 2: Answered prayer
 * 3: Victory
 * 4: Forgiveness
 * 5: Guidance
 */

