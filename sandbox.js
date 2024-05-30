let n = Number(prompt("Enter a number"));
if (!Number.isNaN(n)) {
    console.log("Your number is the square root of " + n * n + ".");
} else {
    console.log("Error: Not a number");
}
