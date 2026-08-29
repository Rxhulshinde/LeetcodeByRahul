class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        l = len(numbers)
        i = 0
        j = l - 1 
        for a in range(l):
            if target > numbers[i]+numbers[j]:
                i+=1
            elif target < numbers[i]+numbers[j]:
                j-=1
            elif target == numbers[i]+numbers[j]:
                return [i+1,j+1]

