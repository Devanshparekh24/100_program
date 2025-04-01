// Method - 1

// let n = 155

// let num = n.toString()

// console.log(num);

// let lang = num.length
// let rev=""

// for (let i = lang - 1; i >= 0; i--) {


//     rev=rev+num.charAt(i)
// }

// console.log(rev);

// Method - 2

let n = 1234;
let r = 0
let rev = 0
let temp = 0


while (n != 0) {

    r = n % 10
    rev=rev*10+r
    n=Math.floor(n/10)
}


console.log(rev);
