/**
    Given a sorted array of integer numbers and an integer target, return the indices of the two numbers such that they add up to the target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    You can return the answer in any order.
 */

function twoSum(sortedArr, target) {
    let left = 0;              // Start pointer at the beginning of the array
    let right = sortedArr.length - 1; // Start pointer at the end of the array

    while (left < right) {
        const sum = sortedArr[left] + sortedArr[right]; // Calculate the sum of the elements at the two pointers

        if (sum === target) {  // If the sum matches the target, return the indices
            return [left, right];
        } else if (sum < target) {  // If the sum is less than the target, move the left pointer to the right
            left++;
        } else {                    // If the sum is greater than the target, move the right pointer to the left
            right--;
        }
    }

    return []; // If no solution is found (although the problem guarantees one solution), return an empty array
}

// Example usage:
const sortedArr = [1, 2, 3, 4, 6];
const target = 6;
console.log(twoSum(sortedArr, target)); // Output: [1, 3] (indices of values 2 and 4 which add up to 6)
