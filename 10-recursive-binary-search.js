/**
    Q:given a sorted array of `n` elements and a target element `t`,
    find the index of `t` in the array.
    Return -1 if the target element is not found.

    **: for binary search the array should be sorted!
 */

function recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1)
};

function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) return -1;
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) return middleIndex;
    if (target > arr[middleIndex]) return search(arr, target, middleIndex + 1, rightIndex)
    if (target < arr[middleIndex]) return search(arr, target, leftIndex, middleIndex - 1)
}

// Big-O = O(log n)               0                  middle                  11
console.log(recursiveBinarySearch([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 100], 18));