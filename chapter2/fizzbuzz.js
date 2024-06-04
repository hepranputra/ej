for (let i = 1; i <= 100; i++) {
    let result = "";
    if (i % 3 == 0) {
        result += "Fizz";
    }
    if (i % 5 == 0) {
        result += "Buzz";
    }
    // If result is still empty string, i will be printed.
    console.log(result || i);
}
