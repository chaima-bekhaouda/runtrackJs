// Declare the "bisextile" function
function bisextile(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
        // Check if the year is divisible by 100
        if (year % 100 === 0) {
            // Check if the year is divisible by 400
            return year % 400 === 0;
        } else {
            // If the year is divisible by 4 but not by 100, it is a leap year
            return true;
        }
    } else {
        // If the year is not divisible by 4, it is not a leap year
        return false;
    }
}

// Test the "bisextile" function
console.log(bisextile(2000)); // Should return true
console.log(bisextile(1900)); // Should return false
console.log(bisextile(2024)); // Should return true
console.log(bisextile(2022)); // Should return false
