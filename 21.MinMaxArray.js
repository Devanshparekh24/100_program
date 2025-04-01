let a = [10, 20, 50, 54, 88, 77, 99]
let max = a[0]
let min = a[0]



for (let i = 0; i < a.length; i++) {
    if (a[i] > max) {
        max = a[i]


    }
    if (a[i]<min) {
        min=a[i]
    }
}

console.log(`max array ${max}`);
console.log(`min array ${min}`);
