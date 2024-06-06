let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

function deepEqual(x, y) {
    // Test 1
    if (x ===
     y) {
        return true;
    }
    
    // Test 2
    if (x == null || typeof x != "object" ||
        y == null || typeof y != "object") {
        
        return false;
    }
    
    
    let keysX = Object.keys(x);
    let keysY = Object.keys(y);
    
    // Test 3
    if (keysX.length != keysY.length) {
        return false;
    }
    
    // Test 4
    for (let key of keysX) {
        if (!keysY.includes(key) ||
            !deepEqual(x[key], y[key])) {
                
            return false;
        }
    }
    
    return true;
}
