let a = [10, 20, 30, 50, 80, 90, 40, 2, 6, 7, 945, 55, 4]
let odd = []
let even = []

for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 !== 0) {
        odd.push(a[i])

    }
    if (a[i] % 2 == 0) {
        even.push(a[i])

    }

}
console.log(`odd is ${odd}`);
console.log(`even is ${even}`);
