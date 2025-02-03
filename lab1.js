//CPAN 113 FUNDAMENTALS OF JAVASCRIPT
//VARIABLES AND DATA TYPES

//TASK 1 : DECLARING VARIABLES
console.log("Task 1: Declaring Variables");
//1. Declare a variable userName using var and assign your name to it
var userName = "Dere_samad";
console.log("userName:", userName);
//2. Declare a variable userAge using let and assign your age to it
let userAge = "26";
console.log("userAge:", userAge);
//3. Declare a constant variable userID using const and assign a fictional ID to it
const userID = "N01738005";
console.log ("userID:", userID)

//TASK 2 UPDATING VARIABLES
console.log("Task 2: Updating Variables");
// 1. Update the userName variable to a different name
userName = "Babatunde";
console.log("userName:", userName);
// 2. Update the userAge variable to a different age
userAge = 30;
console.log(" userAge:", userAge);
// 3. Attempt to update the userID variable and observe the result
try {
    userID = "XYZ789"; // Attempting to update a constant
} catch (error) {
    console.log("Error updating userID:", error.message);
}

//TASK 3: WORKING WITH DIFFDERENT DATA TYPES
console.log("Task 3: Working with Different Data Types");
// 1. Declare variables of different data types
let score = 95.5; 
console.log("score (Number):", score);
let courseName = "JavaScript Basics"; 
console.log("courseName (String):", courseName);
let isEnrolled = true; 
console.log("isEnrolled (Boolean):", isEnrolled);
let grades = [90, 95, 88, 92]; 
console.log("grades (Array):", grades);
let student = { name: "Samad Babatunde", age: 25, course: "CPAN" }; 
console.log("student (Object):", student);



// Task 4: Arithmetic Operations
console.log("Task 4: Arithmetic Operations");
// 1. Perform and log the results of the following operations
let addResult = userAge + score;
console.log("Addition (userAge + score):", addResult);

let subtractResult = score - userAge;
console.log("Subtraction (score - userAge):", subtractResult);

let multiplyResult = userAge * 2;
console.log("Multiplication (userAge * 2):", multiplyResult);

let divideResult = score / userAge;
console.log("Division (score / userAge):", divideResult)

// Task 5: Comparison Operations
let ageComparison1 = userAge == "30"; // Loose equality
let ageComparison2 = userAge === "30"; // Strict equality

let scoreComparison1 = score < 100; // Less than
let scoreComparison2 = score >= 95; // Greater than or equal to

let enrollmentCheck = isEnrolled === true; // Strict check for true
console.log("TASK 5: Comparison Operations");
console.log("userAge == '30':", ageComparison1);
console.log("userAge === '30':", ageComparison2);
console.log("score < 100:", scoreComparison1);
console.log("score >= 95:", scoreComparison2);
console.log("isEnrolled === true:", enrollmentCheck);

// TASK 6: CONDITIONAL STATEMENTS
if (userAge > 18) {
  console.log("TASK 6a: userAge is greater than 18");
} else {
  console.log("TASK 6a: userAge is not greater than 18");
}

let coursename = "Web Development"; 

switch (coursename) {
  case "Introduction to Javascript":
    console.log("TASK 6.2: Welcome to Introduction to JavaScript");
    break;
  case "Algorithm and Problem Solving":
    console.log("TASK 6.2: Ready for Algorithm and Problem Solving?");
    break;
  case "Web Development":
    console.log("TASK 6.2: Learning web development is fun!");
    break;
  default:
    console.log("TASK 6.2: Unknown course");
    break;
}
