console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

function min(n, m) {
    if (n < m) return n;
    return m;
}
