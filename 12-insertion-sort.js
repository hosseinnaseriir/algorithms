function insertionSort(arr) {
    // Loop-A
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;
        // Loop-B
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j]
            j -= 1
        }

        arr[j + 1] = numberToInsert
    }
    return arr;
}

// Big-O = O(n^2)

console.log(insertionSort([-2, 4, -3, 4, 7, 8, 3]));
