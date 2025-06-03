// TASK 1: WORKING WITH OBJECTS
const student = {
    name: "John Doe",
    age: 16,
    grade: "10th",
    school: "Greenwood High",
    greet: function () {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

// Access and log properties
console.log(student.name);
console.log(student.age);
console.log(student.grade);
console.log(student.school);

// Call the greet method
student.greet();

// Update age and log
student.age = 17;
console.log("Updated age:", student.age);

// TASK 2: PARSING AND STRINGIFYING JSON
const bookJSON = '{"title": "1984", "author": "George Orwell", "year": 1949, "genre": "Dystopian"}';

// Parse JSON string into JavaScript object
const bookObject = JSON.parse(bookJSON);
console.log(bookObject);

// Convert object back to JSON string
const newBookJSON = JSON.stringify(bookObject);
console.log(newBookJSON);

// TASK 3: USING THE SPREAD OPERATOR
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Combine arrays
const combinedArray = [...array1, ...array2];
console.log(combinedArray);

// Create person1 object
const person1 = { firstName: "Alice", lastName: "Smith", age: 25 };

// Create person2 object with updated age
const person2 = { ...person1, age: 30 };
console.log(person2);

// TASK 4: USING OBJECT METHODS
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : "Cannot divide by zero"
};

// Log calculations
console.log("Add:", calculator.add(10, 5));
console.log("Subtract:", calculator.subtract(10, 5));
console.log("Multiply:", calculator.multiply(10, 5));
console.log("Divide:", calculator.divide(10, 5));