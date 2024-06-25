
function factorial(n) {
    // O(1)
    let result = BigInt(1);
    // O(n)
    for (let i = n; i >= 2; i--) {
        result *= BigInt(i)
    }
    // O(1)
    return result;
};
// Big-O O(n)

console.log(factorial(2));