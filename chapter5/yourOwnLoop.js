loop(3, n => n > 0, n => n - 1, console.log);

function loop(val, test, update, action) {
    for (let i = val; test(i); i = update(i)) {
        action(i);
    }
}
