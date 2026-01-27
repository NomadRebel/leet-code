var twoSum = function(nums, target) {
        for(let i=0; i<=nums.length; i++){              // this loop will hold the first value to perform the sum
            for (let j=i+1; j<=nums.length; j++){       // this loop will hold the second value to perform the sum
                if(nums[i]+nums[j]==target){            // checking condition
                    const newarr = [i, j];              // changing indices into an single array  
                    return newarr;
                }
            }
        
        }
    };

const arr = [1,5,6,2,7];
const target = 8;

console.log(twoSum(arr, target));