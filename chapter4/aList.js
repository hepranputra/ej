console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));

function arrayToList(array) {
    let list = {};
    let rest = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: rest};
        rest = list;
    }
    return list;
}

function listToArray(list) {
    let array = [];
    let inputlist = list;
    while (inputlist.rest != null) {
        array.push(inputlist.value);
        inputlist = inputlist.rest;
    }
    array.push(inputlist.value);
    return array;
}

function prepend(element, list) {
    return {value: element, rest: list};
}

function nth(list, index) {
    let currentList = list;
    let counter = 0;
    while (counter != index) {
        currentList = currentList.rest;
        counter++;
    }    
    return currentList.value;
}
