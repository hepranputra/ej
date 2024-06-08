loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

function loop(n, condition, update, action) {
    for (let i = n; condition(i); i = update(i)) {
        action(i);
    }
}
