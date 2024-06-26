console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false


function isEven(n) {
    if (n == 0) {
        return true;
    } else if (n == 1) {
        return false;
    } else {
        // Deal with negative number.
        if (n < 0) {
            n = -(n);
        }
        return isEven(n % 2);
    }
}
