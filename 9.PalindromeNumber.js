let n = 121;
let r = 0;
let s = 0
let temp = 0
temp = n

while (n > 0) {
    r = n % 10
    s = (s * 10) + r
    n = Math.floor(n / 10)


}

if (temp == s) {
    console.log(s+""+"is a Palindrome Number");
    

} else {
    console.log("is Not Palindrome Number");
    

}