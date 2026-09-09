function isPositiveNumber(n){return n>0}
function isNegativeNumber(n){return n<0}
function isZero(n){return n===0}
function isEven(n){return n%2===0}
function isOdd(n){return n%2!==0}

function describeNumber(number) {
    return `positive: ${isPositiveNumber(number)}, negative: ${isNegativeNumber(number)}, zero: ${isZero(number)}, even: ${isEven(number)}, odd: ${isOdd(number)}`
}

console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));