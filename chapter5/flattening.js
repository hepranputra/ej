let arrays = [[1, 2, 3], [4, 5], [6]];

// <data>.reduce(<action>, initial)
let result = arrays.reduce((initial, current) => initial.concat(current), [])
console.log(result);
