let arr = [10, 20, 20, 30]
let newArr = []


for (let i = 0; i < arr.length; i++) {

    let isDupicate = false;

    for (let j = 0; j < newArr.length; j++) {
        if(arr[i]===newArr[j]){
            isDupicate=true
            break
        }
    }

    if(!isDupicate){
        newArr.push(arr[i])

    }
}
console.log(newArr)