let limit = 10000; // Set the range for Armstrong numbers

for (let n = 1; n <= limit; n++) { 
    let temp = n;
    let arm = 0;
    let numDigits = n.toString().length; // Count the number of digits

    let current = temp; // Store the value for processing
    while (current > 0) {
        let r = current % 10;
        arm += Math.pow(r, numDigits); // Raise to the power of numDigits
        current = Math.floor(current / 10);
    }

    if (arm === temp) {
        console.log(temp); // Print Armstrong number
    }
}



