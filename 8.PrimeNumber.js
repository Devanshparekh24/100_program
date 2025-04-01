let num = 0;
let temp = 0;

for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        temp++;
    }




}
if (temp === 2) {
    console.log(num + " " + "Its a Prime Number");

}

else if (num === 0) {
    console.log(num + " " + " is a Zero");


} else if (num < 0) {
    console.log(num + " " + "is Negative Number");

}
else {
    console.log(num + "" + "Its Not a Prime Numnber");

}
