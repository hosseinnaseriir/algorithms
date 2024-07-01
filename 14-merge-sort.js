function mergeSort(arr) {
    if (arr.length < 2) return arr;
    const mid = Math.floor(arr.length / 2)
    const leftArray = arr.slice(0, mid)
    const rightArray = arr.slice(mid)
    return merge(mergeSort(leftArray), mergeSort(rightArray))
}
// Big-O = O(logn)

function merge(leftArray = [], rightArray = []) {
    const sortedArray = [];
    while (leftArray.length && rightArray.length) {
        if (leftArray[0] <= rightArray[0]) {
            // shift() removes the first element from an array and returns that removed element.
            sortedArray.push(leftArray.shift())
        } else {
            sortedArray.push(rightArray.shift())
        }
    }
    return [...sortedArray, ...leftArray, ...rightArray]
}
// Big-O = O(n)

// => Big-O = O(nlogn)
console.log(mergeSort([-2, -1, 4, -3, 4, 2, 7, 8, 3]));
