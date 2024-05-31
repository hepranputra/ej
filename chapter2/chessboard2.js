let size = 8;

for (let row = 0; row < size; row++) {
    let block = "";
    
    for (col = 0; col < size; col++) {
        if ((col + row) % 2 == 0) {
            block += " ";
        } else {
            block += "#";
        }
    }
    
    console.log(block);
}
