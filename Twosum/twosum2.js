// A better way to solve the twosum algorithm is to not loop through the array twice, hence we can use a hashMap which makes searching faster

// second solution
const twoSum = (nums, target) => {
    let obj = {};
    let compliment;
    for(let i = 0; i < nums.length; i++){
        obj[i] = nums[i]; // each element in the array
        compliment = target - obj[i];
        if(i === Object.values(obj).indexOf(compliment)) continue;
        if(Object.values(obj).includes(compliment)){
            return [Object.values(obj).indexOf(compliment), i];
        }
    }
}

const result = twoSum([3, 3, 5, 8, 12], 17)
console.log(result);



const getSums = (nums, target) => {
    let obj = {};
    for (let i = 0; i < nums.length; i++){
        let complement = target - nums[i];
        if (complement in obj) {
            return [nums.indexOf(complement), i];
        } else {
            obj[nums[i]] = i
        }
    }
    return [];
}

console.log(getSums([3, 3, 5, 8, 12], 17));
