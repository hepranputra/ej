console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

function every(array, test) {
    // VERSION 1
    // for (let n of array) {
    //     if (!test(n)) {
    //         return false
    //     }
    // }
    // return true;
    
    // VERSION 2
    return !array.some(n => !test(n));
}
