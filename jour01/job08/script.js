// Declare the "sommeNombresPremiers" function
function sommeNombresPremiers(a, b) {
    // Function to check if a number is prime
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;

        if (num % 2 === 0 || num % 3 === 0) return false;

        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }

        return true;
    }

    // Check if both numbers are prime
    if (isPrime(a) && isPrime(b)) {
        return a + b;
    } else {
        return false;
    }
}

// Test the "sommeNombresPremiers" function
console.log(sommeNombresPremiers(3, 5));   // Should return 8 (3 + 5)
console.log(sommeNombresPremiers(11, 13)); // Should return 24 (11 + 13)
console.log(sommeNombresPremiers(4, 7));   // Should return false (4 is not prime)
console.log(sommeNombresPremiers(6, 8));   // Should return false (6 and 8 are not prime)
