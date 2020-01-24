// third solution
function addNum(arr, target) {
    for (let i = 0; i < arr.length; i++){
        for (j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === target) {
                return [i, j]
            }
        }
    }
    return null;
}

console.log(addNum([2, 7, 11, 15], 18))
console.log(addNum([3, 3], 6))

