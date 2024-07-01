function quickSort(arr) {
    if (arr.length < 2) return arr;
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else if (arr[i] > pivot) {
            right.push(arr[i])
        }
    };
    return [...quickSort(left), pivot, ...quickSort(right)]

}

// Worst case - Big-O = O(n^2)

/*
 Average case - Big-O = O(nlogn) 
 O(n) => beacause we have a for loop  which is O(logn)
 O(logn) => beacause we recursivly devide the array to smaller arrays which is O(logn)
 => So finaly we have => Big-O = O(nlogn) 
 */

console.log(quickSort([-2, -1, 4, -3, 4, 2, 7, 8, 3]));
