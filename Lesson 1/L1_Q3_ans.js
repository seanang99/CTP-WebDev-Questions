/**
 * Topic: Variables, Conditionals, Functions
 * Challenge: Medium
 * Question 3
 */
let radius = 5;
const pi = 3.14159265;

function areaCircle(radius) {
  return radius ** 2 * Math.PI;
}

function circumferenceCircle(radius) {
  return radius * 2 * Math.PI;
}

console.log(areaCircle(radius));
console.log(circumferenceCircle(radius));

radius = 4;

console.log(areaCircle(radius));
console.log(circumferenceCircle(radius));

function compare(radius) {
  const area = areaCircle(radius);
  const circumference = circumferenceCircle(radius);

  function roundTo2dp(num) {
    return Math.round(num * 100) / 100;
  }

  console.log(`When the radius is ${radius},`);
  console.log("Area: " + roundTo2dp(area));
  console.log("Circumference: " + roundTo2dp(circumference));

  if (area > circumference) {
    console.log("The area is larger than circumference.\n");
  } else if (area < circumference) {
    console.log("The area is smaller than circumference.\n");
  } else {
    console.log("The area is equal to circumference.\n");
  }
}

radius = 1;
compare(radius);

radius = 2;
compare(radius);

radius = 3;
compare(radius);

/**
 * Final Answer
 
78.53981633974483
31.41592653589793

50.26548245743669
25.132741228718345

When the radius is 1,
Area: 3.14
Circumference: 6.28
The area is smaller than circumference.

When the radius is 2,
Area: 12.57
Circumference: 12.57
The area is equal to circumference.

When the radius is 3,
Area: 28.27
Circumference: 18.85
The area is larger than circumference.
 */