# Questions

## Q1 Variables | Easy
On one single line, declare three variables with the following names and values:
  ```
  firstName = “John”
  lastName = “Doe”
  age = 35
  ```

## Q2 Variables | Easy
1. Declare a variable called “university”, with the value “NUS” *(hint: value should be string)*
2. Declare a read-only variable called “cca”, with the value “The Navigators". Can you change the value of “cca”?
3. Change the value of university to “NTU”
4. Print the value of university and cca  *(hint: use console.log)*

## Q3 Variables, Conditionals, Functions | Medium 
1. Declare a variable called “radius”, with the value 5
2. Declare a variable called “pi”, with the value 3.1459265. This should be declared as a read-only variable since the value of pi does not change
3. Declare a variable called “area” and “circumference”
4. Calculate the area of the circle with the above-declared variables (radius and pi)

*Formula of area of circle = pi x r ^ 2 (hint: operator for power  is \*\*)*

5. Calculate the circumference of the circle

*Formula of circumference of circle = pi x 2 x r*

6. Print the value of the area and circumference.
7. Change the value of radius to 4
8. Print the value of the area and circumference. 

Create a function that calculates the area and circumference of the circle. *Use Math.PI instead of the variable “pi”.*

Create a function that prints the radius, area, circumference and compares if the value of the area is larger/smaller/equal to the circumference. 

Sample output
```
When the radius is 1,
Area: 3.14
Circumference: 6.28
The area is smaller than circumference 
```
Print the value of the area and circumference when the radius is 1, 2 and 3

## Q4 Objects | Easy
Create a “student” object with the following properties:
```
name: John Doe
university: NUS
faculty: Science
specialisation: Chemistry
year: 2
```
Write a function that prints out the following self-introduction statement

```Hi! Nice to meet you! I’m {name}, Year {year}, {specialisation} student from {university} {faculty}!```

```[Desired Output]> Hi! Nice to meet you! I’m John Doe, Year 2, Chemistry student from NUS Science!```

Next, delete the property “university” and add a new property called “college” with the value as “CHS”. 
Print the object after you have made the changes

## Q5 Loops | Medium
Write a JavaScript program that prints the following output. 
```
#
###
#####
#######
```

## Q6 Objects | Medium
Write a JavaScript program to get the volume of a Cylinder with three decimal places using object classes.

*Volume of Cylinder:  πr2h, where r = radius and h = height of the cylinder*

## Q7 Arrays | Easy 
Create the following array: assurances = `["Salvation", "Prayer", "Victory"]`;

- Change the second element to “Answered prayer”
- Add 2 assurances “Forgiveness” and “Guidance” to the array

Print the number of assurances and list them. Here’s the output you should get:
```
There are 5 assurances in LoA:
1: Salvation
2: Answered prayer
3: Victory
4: Forgiveness
5: Guidance
```

## Q8 Arrays, Conditionals, Loops, Functions | Medium 
Find the leap years in a given range of years. 
Any year that is evenly divisible by 4 is a leap year (e.g. 1988, 1992, 1996…)

![](https://www.kumon.com/resources/wp-content/uploads/2020/02/LeapYearMath-1.png)

- Find the leap years between 2000 to 2022.
- How many leap years are there?

## Q9 Arrays, Loops, Math | Medium
Given an integer n, return a string array answer *(1-indexed)* where:
- `answer[i] == "FizzBuzz"` if i is divisible by 3 and 5.
- `answer[i] == "Fizz"` if i is divisible by 3.
- `answer[i] == "Buzz"` if i is divisible by 5.
- `answer[i] == i` (as a string) if none of the above conditions are `true`.

## Q10 Objects, Arrays, Loops | Easy
Return the count of each character in an input string.

## Q11 Arrays, Loops | Easy
Return the reverse of the following input strings: 
- sailor
- racecar
