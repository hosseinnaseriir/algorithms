/**
    Q:given a sorted array of `n` elements and a target element `t`,
    find the index of `t` in the array.
    Return -1 if the target element is not found.

    **: for binary search the array should be sorted!
 */

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (target === arr[middle]) return middle;
        if (target < arr[middle]) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
    return -1
};

// Big-O = O(log n)      0                  middle                  11
console.log(binarySearch([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 100], 7));