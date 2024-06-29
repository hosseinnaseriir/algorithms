/**
    Q?:=> what is fibbonacci of 7 (7th);
     
    A!:The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones,
    usually starting with 0 and 1. The sequence goes: 0, 1, 1, 2, 3, 5, 8, ...

   + To find the 7th Fibonacci number, we can list out the sequence up to the 7th term:
    0th. F(0)=0
    1th. F(1)=1
    2th. F(2)=1 (0 + 1 = 1)
    3th. F(3)=2 (1 + 2 = 3)
    4th. F(4)=3 (1 + 2 = 3)
    5th. F(5)=5 (2 + 3 = 5)
    6th. F(6)=8 (5 + 3 = 8)

    n>= 2, f(n)= f(n-1) + f(n-2)
    7>= 2, f(7)= f(6) + f(5) => f(7) = 5 + 8 
    ++Therefore, the 7th Fibonacci number (considering the sequence starts at 0) is F(6)=7
 */
function recursiveFibonacci(n) {
    // Base Case
    if (n < 2) return n
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}
// Big-O = Space Complixity = O(n)
// Big-O = Time Complixity = O(2^n)

// console.log((recursiveFibonacci(0)));
// console.log((recursiveFibonacci(1)));
// console.log((recursiveFibonacci(6)));