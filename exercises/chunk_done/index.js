// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let newArray = []

    for (let i = 0; i < array.length; i = i + size) {

        let tempNewMiniArray = []

        for (let j = 0; j < size; j++) {

            if (array[i + j])
                tempNewMiniArray.push(array[i + j])

        }

        newArray.push(tempNewMiniArray)

    }

    return newArray
}



module.exports = chunk;
