class Solution:
    def rotate(self, nums: list[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        def reverse1(start:[int], end: [int]) -> None:
            while start <= end:
                nums[start], nums[end] = nums[end], nums[start]
                start+=1
                end-=1
        
        n = len(nums)
        k%=n

        reverse1(0,n-1)
        reverse1(0,k-1)
        reverse1(k,n-1)