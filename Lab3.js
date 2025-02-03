// TASK 1: DECLARING ARRAYS
// Using Array Constructor
const colors = new Array("Red", "Green", "Blue");

// Using Array Literal Notation
const sizes = ["Small", "Medium", "Large"];

// Using Array.of()
const numbers = Array.of(5, 15, 25);

// TASK 2: MODIFYING ARRAYS
// Adding an element to the end of colors array
colors.push("Yellow");

// Removing the last element from sizes array
sizes.pop();

// Accessing the second element in numbers array and printing it
console.log("Second number:", numbers[1]);

// TASK 3: ARRAY METHODS
// Filtering numbers greater than 10
const filteredNumbers = numbers.filter(num => num > 10);
console.log("Filtered Numbers:", filteredNumbers);

// Squaring each element in numbers array using map()
const squaredNumbers = numbers.map(num => num * num);
console.log("Squared Numbers:", squaredNumbers);

// Using forEach() to print each element in colors array
console.log("Colors array:");
colors.forEach(color => console.log(color));

// TASK 4: ITERATING ARRAYS
// Using for...of loop to iterate over numbers array
console.log("Numbers array (for...of loop):");
for (const num of numbers) {
    console.log(num);
}

// Using traditional for loop to iterate over sizes array
console.log("Sizes array (for loop):");
for (let i = 0; i < sizes.length; i++) {
    console.log(sizes[i]);
}

// Using entries() method to get index-element pairs from colors array
console.log("Colors array (entries method):");
for (const [index, color] of colors.entries()) {
    console.log(`Index ${index}: ${color}`);
}