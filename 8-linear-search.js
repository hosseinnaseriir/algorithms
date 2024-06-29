function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1
};

// Big-O = O(n)

console.log(linearSearch([-2, 5, 3, 7, 10, 66], 7));