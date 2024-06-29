/**
    Q?:=> give an integer and find the factorial of that

    A!:=> 5! = 5*4*3*2*1 => 5! = 5 * 4! 
    n! = n * (n-1)!
 */
function recursiveFactorial(n) {
    // Base Case
    if (n === 0) return 1;
    return n * recursiveFactorial(n - 1)
}
// Big-O = O(n)
console.log(recursiveFactorial(100));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(0));