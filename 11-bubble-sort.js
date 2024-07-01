
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    // Loop-A
    do {
        swapped = false;
        // Loop-B
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        n--; // Each pass through the array places the ((next largest value)) in its correct position
    } while (swapped);
    return arr
};

// Big-O = O(n^2)

console.log(bubbleSort([-2, 4, -3, 4, 7, 8, 3]));