"""
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. 
Return the linked list sorted as well.
"""

def remove_duplicates(head):
    i = 1
    while i < len(head):
        if head[i] == head[i-1]:
            head.remove(i)
        else: 
            i += 1
    return head

print(remove_duplicates([1, 1, 2])) # [1, 2]
print(remove_duplicates([1, 1, 2, 3, 3])) # [1, 2, 3]
print(remove_duplicates([1, 1, 1])) # [1]
print(remove_duplicates([1, 2, 3])) # [1, 2, 3]