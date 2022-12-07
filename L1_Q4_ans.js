/**
 * Topic: Object
 * Challenge: Easy
 * Question 4
 */
var student = {
  name: "John Doe",
  university: "NUS",
  faculty: "Science",
  specialisation: "Chemistry",
  year: "2",
};

function selfIntroduction(student) {
  return (
    "Hi! Nice to meet you! I’m " +
    student.name +
    ", Year " +
    student.year +
    ", " +
    student.specialisation +
    " student from " +
    student.university +
    " " +
    student.faculty +
    "!"
  );
}

console.log(selfIntroduction(student));

delete student.university;
var student = {...student, college: 'CHS'}
console.log(student);
