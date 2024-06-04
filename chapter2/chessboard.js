/*
LOGIC
For every row + colomn that is even, it will be filled with an empty space.
And for odd, it will be filled with hash.
*/
let size = 8;
let result = "";
for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
        if ((col + row) % 2 == 0) {
            result += " ";
        } else {
            result += "#";
        }
    }
    // Prevent double newline after the last row.
    if (row != size - 1) {
        result += "\n";
    }
}
console.log(result);
