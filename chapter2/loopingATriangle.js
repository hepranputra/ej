// Solution 1
// let lim = 7;
// let block = "#";
// for (let i = 0; i < 7; i++) {
//     console.log(block);
//     block += "#";
// }

// Solution 2
for (let block = "#"; block.length <= 7; block += "#") {
    console.log(block);
}
