console.log(countBs1("BOB"));
console.log(countBs2("BOB"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

function countBs1(str) {
    let total = 0;
    for (let char of str) {
        if (char == "B") total++;
    }
    return total;
}

function countChar(str, char) {
    let total = 0;
    for (let charOfStr of str) {
        if (charOfStr == char) total++;
    }
    return total;
}

function countBs2(str) {
    return countChar(str, "B");
}
