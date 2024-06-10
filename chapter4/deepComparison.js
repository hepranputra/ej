let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

function deepEqual(v1, v2) {
    // Compare without type conversion.
    if (v1 === v2) {
        return true;
    }
    
    // Deal with null
    if (v1 == null || v2 == null) {
        return false;
    }
    
    // Compare their lengths.
    let keys1 = Object.keys(v1);
    let keys2 = Object.keys(v2);
    if (keys1.length != keys2.length) {
        return false;
    }
    
    for (let key of keys1) {
        // Compare availability.
        if (!keys2.includes(key)) {
            return false;
        }
        // Deal nested array.
        if (!deepEqual(v1[key], v2[key])) {
            return false;
        }
    }
    
    // If passed all the tests above, 2 values must be the same.
    return true;
}
