let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];
console.log(myArray);
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

function reverseArray(array) {
    let reversedArray = [];
    for (let i = 0; i < array.length; i++) {
        reversedArray.unshift(array[i]);
    }
    return reversedArray;
}

function reverseArrayInPlace(array) {
    let tmp = 0;
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        tmp = array[i];
        array[i] = array[(array.length - 1) - i];
        array[(array.length - 1) - i] = tmp;
    }
}
