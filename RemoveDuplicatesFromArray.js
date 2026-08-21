// We have an array with duplicate elements. we will loop through the array with two variables k and j. 
// both variables j and k will have the same starting value that is 1 and we will increment the second variable j.
// we will increment j at every step in the loop
// if we find the j'th element different than k'th element
// we will change the value of k'th element with j'th

var removeDuplicates = function(nums) {

    let k = 1;
    for(let j = 1;j<nums.length; j++){
        console.log('working at index', j)
        if(nums[j]!= nums[j-1]){
            nums[k] = nums[j];
            k++
            console.log('in if condition k - ', k,' j - ', j)
        }
    }
    console.log('This is number of unique elements - ',k)

    return k;
    
};  

const df = [1,1,2,3,4,4,5,5,5,6,7,7,7,7];
removeDuplicates(df)