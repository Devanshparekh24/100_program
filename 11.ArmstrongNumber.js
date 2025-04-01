let n = 153;
let r = 0;
let arm = 0;
let temp = 0;
temp = n;

while (n > 0) {

    r = n % 10;
    arm = (r * r * r) + arm
    n = Math.floor(n / 10)

}
if (arm === temp) {
console.log("This is armstrong Number");

}else{
    console.log("This is Not armstrong Number");
    
}