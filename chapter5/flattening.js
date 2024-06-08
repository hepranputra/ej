let arrays = [[1, 2, 3], [4, 5], [6]];
let result = arrays.reduce((flatten, current) => flatten.concat(current), []);
console.log(result);
// → [1, 2, 3, 4, 5, 6]
