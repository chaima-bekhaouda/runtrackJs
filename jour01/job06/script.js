// Declare the "fizzbuzz" function
function fizzbuzz() {
    // Loop from 1 to 151
    for (let i = 1; i <= 151; i++) {
        // Check if the number is a multiple of both 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        // Check if the number is a multiple of 3
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        // Check if the number is a multiple of 5
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        // If none of the above conditions are met, simply display the number
        else {
            console.log(i);
        }
    }
}

// Call the "fizzbuzz" function to display numbers with conditions
fizzbuzz();
