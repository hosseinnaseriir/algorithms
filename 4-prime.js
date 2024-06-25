// function isPrime(n) {
//     if (n < 2) return false
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return false
//         }
//     }
//     return true
// }
// Big-O = O(n)



// اعداد صحیح بزرگ تر از جذر نیازی به برررسی ندارند،زیرا هرگاه
// n = a*b => a or b is less than or equals sqrt of n 
// n=24 , a=4 and b=6
// the sqrt(square root) of 24 is 4.89
// 4 is less than 4.89
//  a is less than sqrt of n
// اگر عددی مرکب باشد که اول نباشد 
// یک مقسوم علیه کوچکتر یا مساوی جذر ان پیدا خواهید کرد
// if n =100 we check untill 10
// if n =100,000 we check untill 100
// O(n) but not linear => O(sqrt(n))

// function isPrime(n) {
//     if (n < 2) return false
//     for (let i = 2; i < Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false
//         }
//     }
//     return true
// }
// Big-O = O(sqrt(n))


// function isPrime(n) {
//     if (n < 2) return false
//     let result = n % 2
//     if (result === 0) return false;
//     return true
// }
// O(1)

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));