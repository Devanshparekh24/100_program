let arr = [100, 20, 30, 50];
let max = arr[0];
let secondMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        secondMax = max; // Store the previous max as second max
        max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
        secondMax = arr[i]; // Update second max if it's not equal to max
    }
}

console.log("Largest:", max);
console.log("Second Largest:", secondMax);
