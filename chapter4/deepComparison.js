let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

function deepEqual(x, y) {
    // Compare without type conversion.
    if (x === y) {
        return true;
    }
    // Deal with null
    if (x == null || y == null) {
        return false;
    }
    let keysX = Object.keys(x);
    let keysY = Object.keys(y);
    // Compare length of array's element or object's key.
    if (keysX.length != keysY.length) {
        return false;
    }
    // Compare availability.
    for (let key of keysX) {
        if (!keysY.includes(key) || !deepEqual(x[key], y[key])) {
            return false;
        }
    }
    return true;
}
