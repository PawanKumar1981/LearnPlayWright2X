console.log("Hello");
function add(a, b) {
    return a + b;
}
let results;
for (let i = 0; i < 10000; i++) {

    results = add(i, i + 1);
}
console.log("after 10000 calls:", results)
