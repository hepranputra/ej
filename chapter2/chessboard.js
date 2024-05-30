/*
    LOGIC: Let the computer know where is odd and even row
           position. Next in the column, let the computer
           know where is odd and even column.
           
           For each odd column, place space.
           For even, place hash.
*/

let size = 8;

for (let row = 0; row < size; row++) {
    let block = "";    
    
    for (let col = 0; col < size; col++) {
        if (row % 2 != 0) {
            if (col % 2 != 0) {
                block += " ";
            } else {
                block += "#";
            }
        } else {
            if (col % 2 != 0) {
                block += "#";
            } else {
                block += " ";
            }
        }
    }
    console.log(block);
    block = "";
}
