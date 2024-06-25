function Summation(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i
    }
    return sum
}
// Example
// Summation(4) = 1+2+3+4 = 10


// O(n)
function Summation(n) {
    // O(1)
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        // O(n) if n = 4 => O(n) = O(4)
        sum += i
    }
    // O(1)
    return sum
}
// O(1 + n + 1) = O(n + 2) = O(n) 
// Linear Time Complixity 

// O(1)
function SummationOfN(n) {
    return (n * (n - 1))
}


// O(n^2)
function Quadratic(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= i; j++) {
            sum += i + j
        }
    }
    return sum;
}

// Quadratic(2)
//  0 + 0 + 0
//  0 + 1 + 0
//  1 + 1 + 1
//  3 + 2 + 0
//  5 + 2 + 1
//  8 + 2 + 2
// 12
(Quadratic(2));

// O(n^3)
function Qubic(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= i; j++) {
            for (let z = 0; z <= j; z++) {
                sum += i + j + z
            }
        }
    }
    return sum;
}

// Qubic(2)
// 0 + 0 + 0
// 1 + 0 + 0
// 1 + 1 + 0
// 1 + 1 + 1
// 2 + 0 + 0
// 2 + 1 + 0
// 2 + 1 + 1
// 2 + 2 + 0
// 2 + 2 + 1
// 2 + 2 + 2
// 30
(Qubic(2));


// O(n log)
function binary(list, target) {

    const arr = list.sort((a, b) => a - b);
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        if (arr[middle] === target) {
            return middle
        } else if (arr[middle] < target) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
    return -1; // target not found}
}

(binary([0, 1, 5, 2, 3, 4, 10, 6, 8, 7, 9], 3));