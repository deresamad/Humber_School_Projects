// Task 1.1: Check if a number is positive, negative, or zero
let x = 3; //  test different numbers

if (x > 0) {
    console.log("The number is positive.");
} else if (x < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// Task 1.2: Switch statement to print grade description
let grade = 'B'; //  test different grades

switch (grade) {
    case 'A':
        console.log("You got an A");
        break;
    case 'B':
        console.log("You got a B");
        break;
    case 'C':
        console.log("You got a C");
        break;
    case 'D':
        console.log("You got a D");
        break;
    case 'F':
        console.log("You got an F");
        break;
    default:
        console.log("Invalid grade");
}

// Task 2.1: While loop to print numbers from 1 to 10
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// Task 2.2: Do-while loop to print the first 5 multiples of 3
let j = 1;
do {
    console.log(3 * j);
    j++;
} while (j <= 5);

// Task 2.3: For loop to iterate over an array of colors
let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// Task 3.1: For-in loop to iterate over an object and print properties and values
let person = {
    name: "Samad",
    age: 26,
    job: "Developer"
};

for (let property in person) {
    console.log(`${property}: ${person[property]}`);
}

// Task 3.2: For-of loop to iterate over an array of grades
let grades = ['A', 'B', 'C', 'D', 'F'];
for (let grade of grades) {
    console.log(grade);
}

// Task 4.1: Loop that breaks when the number equals 5
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
// Task 4.2: Loop to print only even numbers and skip odd ones using continue
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let number of numbers) {
    if (number % 2 !== 0) {
        continue; 
    }
    console.log(number);
}
