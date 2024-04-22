// Declare the "tri" function
function tri(numbers, order) {
    // Check the order parameter
    if (order === "asc") {
        // Sort the array in ascending order
        numbers.sort(function(a, b) {
            return a - b;
        });
    } else if (order === "desc") {
        // Sort the array in descending order
        numbers.sort(function(a, b) {
            return b - a;
        });
    } else {
        // Invalid order parameter
        console.log("Invalid order parameter. Please use 'asc' or 'desc'.");
        return;
    }

    // Return the sorted array
    return numbers;
}

// Test the "tri" function
let numbers1 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let numbers2 = [7, 2, 8, 4, 0, 9, 1, 3, 6, 5];

console.log(tri(numbers1, "asc"));  // Should return [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
console.log(tri(numbers2, "desc")); // Should return [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
console.log(tri(numbers1, "xyz"));  // Should return an error message

