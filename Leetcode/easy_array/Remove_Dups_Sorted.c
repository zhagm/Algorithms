/**
* Instructions:
* Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length. Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
* (https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
* LEVEL: EASY

* Example:
* Given nums = [1,1,2],
* Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
* It doesn't matter what you leave beyond the returned length.
**/

///////////////////////////////////////////////// C Solution (Runtime: 148 ms)
int removeDuplicates(int* nums, int numsSize) {
    int i;
    int l;
    int temp;

    i = 0;
    l = numsSize;
    while (i < l - 1)
    {
        if (nums[i] == nums[i + 1])
        {
            temp = i;
            while (temp < l - 1)
            {
                nums[temp] = nums[temp + 1];
                temp++;
            }
            l--;
        }
        else
            i++;
    }
    return (l);
}

///////////////////////////////////////////////// JS Solution (Runtime: 164 ms)
var removeDuplicates = function(nums) {
    let i = 0;
    let l = nums.length;
    while (i < l - 1)
    {
        if (nums[i] == nums[i + 1])
            {
                nums.splice(i, 1);
                l--;
            }
        else
            i++;
    }
    return (l);
};
////////////////////////////////////////////////