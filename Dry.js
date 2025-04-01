let a = [50, 20, 10, 55, 30]
let n = a.length 


for (let i = 0; i < n-1; i++) {
    for (let j = i + 1; j < n; j++) {

        if (a[i] > a[j]) {


            let temp = a[i]
            a[i] = a[j]
            a[j] = temp

        }

    }
}
console.log(a[1]);
