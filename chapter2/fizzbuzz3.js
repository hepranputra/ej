// I got a helping hand from the author.

for (let n = 1; n <= 100; n++) {
    let word = "";
    if (n % 3 == 0) {
        word += "Fizz";
    }
    if (n % 5 == 0) {
        word += "Buzz";
    }
    console.log(word || n); // By understand this, You'll know it.
}
