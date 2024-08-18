// Given an array of intergers nums and an integer target,return indices of the two numbers such that they add up to target
// nums=[2,7,11,15] , target = 9, O/P- [0,1] ;

// 1-Approach
// const twoSum = function(nums,target){
    
//     for (let i = 0; i < nums.length; i++) {
//         for(let j=0;j<nums.length;j++){
//             if(nums[i]+nums[j]===target && i!==j){
//                 return [i,j]
//             }
//         }
        
//     }
// }
// console.log(twoSum([2,7,11,15],13));

2-Approach
const twoSum = function(nums,target){
    const numMap = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if(numMap[complement] !== undefined){
            return [numMap[complement],i];
        }
        numMap[nums[i]] = i;
    }
}
console.log(twoSum([2,7,11,15],13));