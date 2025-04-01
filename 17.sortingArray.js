let arr = [10, 50, 60, 80, 2, 1, 6]
let n = arr.length



for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        if (arr[i] > arr[j]) {

            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp

        }

    }
}
console.log(arr);


