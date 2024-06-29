function isPowerOfTwo(n) {
    if (n < 1) return false;
    while (n > 1) {
        if (n % 2 !== 0) return false;
        n = n / 2 // O(log n)
    }
    return true;
}
// Big-O = O(log n)
// this is not linear, because each time in while loop we devide n to half

// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(2));
// console.log(isPowerOfTwo(5));


function isPowerOfTwoBitWise(n) {
    if (n < 1) return false;
    return (n & (n - 1)) === 0
}
// Big-O = O(1)
/**
// در باینری عددی که توان دو است به صفر منتهی میشود
The expression (n & (n - 1)) === 0 checks if a number n is a power of two by verifying that there is exactly one bit set in its binary representation.
If n is a power of two, this expression will evaluate to true.
**/

// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(2));
// console.log(isPowerOfTwo(5));
