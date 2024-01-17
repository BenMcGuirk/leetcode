"""
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, 
representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.
"""

def merge_arrays(nums1, nums2):
    i = 0
    j = 0
    if len(nums1) == 0:
        return nums2
    if len(nums2) == 0:
        return nums1
    while i < len(nums1) and j < len(nums2):
        if nums2[j] < nums1[i]:
            nums1.insert(i, nums2[j])
            i += 1
            j += 1
        else:
            i += 1
    if nums2[j]:
        nums1.extend(nums2[j:])
    return nums1

print(merge_arrays([3, 4, 5], [1, 2, 6, 8])) # [1, 2, 3, 4, 5, 6, 8]
print(merge_arrays([1, 2, 3], [4, 5, 6])) # [1, 2, 3, 4, 5, 6]
print(merge_arrays([1, 2, 3], [])) # [1, 2, 3]
print(merge_arrays([], [1, 2, 3])) # [1, 2, 3]
print(merge_arrays([1, 2, 3], [1, 2, 3])) # [1, 1, 2, 2, 3, 3]