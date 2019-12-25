// Problem
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

/* Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

// Pseudocode
    // given an array
    // to access elements of the array first we loop through the array
    // pick one element and check it against each of the remaining elements
    // if the sum = target, return the indices

const twoSum = (nums, target) => {
    let result = [];
        for(let i = 0; i < nums.length; i++){
            for(let j = 0; j < nums.length; j++) {
                if(i === j) continue;
                if(nums[i] + nums[j] === target){
                    result.push(i, j);
                    return result;
                }
            }
        }
    }
    
const result = twoSum([2, 11, 5, 8, 15], 10)
console.log(result);

// This solution has a time complexity of n^2 and can be rewritten in a better algorithm for performance and scalabilty
