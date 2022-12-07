/**
 * Topic: Variables, Conditionals, Functions
 * Challenge: Medium
 * Question 3
 */
let radius = 5;
const pi = 3.14159265;
let area = pi * radius ** 2;

let circumference = 2 * pi * radius;

console.log(area);
console.log(circumference);

function areaCircle(radius) {
  return radius ** 2 * Math.PI;
}

function circumferenceCircle(radius) {
  return radius * 2 * Math.PI;
}

radius = 4;

console.log(area);
console.log(circumference);

function compare(radius) {
  const area = areaCircle(radius);
  const circumference = circumferenceCircle(radius);

  function roundTo2dp(num) {
    return Math.round(num * 100) / 100;
  }

  console.log("When the radius is " + radius + ",");
  console.log("Area: " + roundTo2dp(area));
  console.log("Circumference: " + roundTo2dp(circumference));

  if (area > circumference) {
    console.log("The area is larger than circumference");
  } else if (area < circumference) {
    console.log("The area is smaller than circumference");
  } else {
    console.log("The area is equal to circumference");
  }
}

radius = 1;
console.log(compare(radius, area, circumference));

radius = 2;
console.log(compare(radius, area, circumference));

radius = 3;
console.log(compare(radius, area, circumference));
