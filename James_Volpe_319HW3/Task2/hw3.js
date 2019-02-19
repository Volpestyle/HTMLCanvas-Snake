var rs = require('readline-sync');
var fNum1 = rs.question('1st Number: ');
var fNum2 = rs.question('2nd Number: ');
var fNum3 = rs.question('3rd Number: ');
var fNum4 = rs.question('4th Number: ');


var result1 = factorial(fNum1);
var result2 = sumOfAllDigits(fNum2); 
var result3 = reverseDigits(fNum3);
var result4 = isPalindrome(fNum4);

function factorial(num) {
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}

function sumOfAllDigits(num) {
    var res = 0;
    var digits = (""+num).split("");
    for (var i = 0; i < digits.length; i++) {
        res += parseInt(digits[i]);
    }
    return res;
}

function reverseDigits(num) {
    var res = [];
    var digits = (""+num).split("");
    for (var i = digits.length - 1; i >= 0; i--) {
        res.push(digits[i]);
    }
    return res.join("");
}

function isPalindrome(num) {
    var res = false;
    var digits = (""+num).split("");
    if (reverseDigits(num) === digits.join("")) 
        return true;
    else 
        return false;
}

console.log("Factorial of the 1st number is = " + result1);
console.log("The sum of all the digits in the second number is = " + result2);
console.log("The reverse of the 3rd number is = " + result3);
console.log("Is the 4th number a Palindrome(True/False)? " + result4);