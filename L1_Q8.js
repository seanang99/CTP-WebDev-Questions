/**
 * Topic: Array, Functions
 * Challenge: Medium
 * Question 8
 */

function isLeapYear(year) {
  if (
    (year % 4 === 0 && year % 0 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  ) {
    return true;
  }
  return false;
}

function leapYearRange(start, end) {
  let leapYears = [];

  for (let i = start; i <= end; i++) {
    if (isLeapYear(i)) {
      leapYears.push(i);
    }
  }

  return leapYears;
}

console.log(leapYearRange(2000, 2022)); // [ 2000, 2004, 2008, 2012, 2016, 2020 ]
