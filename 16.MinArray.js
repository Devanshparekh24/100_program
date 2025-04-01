let arr = [10, 20, 60, 51, 5, 66, 44, 88, 22]
let min = arr[0]



for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min[i]) {
        min=arr[i]
    }
    
}
console.log(min);
