var twoSum = function(nums, target) {
        for(let i=0; i<=nums.length; i++){
            for (let j=i+1; j<=nums.length; j++){
                if(nums[i]+nums[j]==target){
                    const newarr = [i, j];                
                    return newarr;
            }
        }
        
    }
};

const arr = [1,5,6,2,7];
const target = 8;

console.log(twoSum(arr, target));