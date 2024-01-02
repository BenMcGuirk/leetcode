"""
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
"""

# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def list_to_linked_list(list):
    dummy = ListNode()
    tail = dummy
    for val in list:
        tail.next = ListNode(val)
        tail = tail.next
    return dummy.next

def merge_two_lists(list1, list2):
    dummy = ListNode()
    tail = dummy

    while list1 and list2:
        if list1.val < list2.val:
            tail.next = list1
            list1 = list1.next
        else:
            tail.next = list2
            list2 = list2.next
        tail = tail.next
        
    if list1:
        tail.next = list1
    elif list2:
        tail.next = list2

    return dummy.next
    
def linked_list_to_list(linked_list):
    new_list = []
    current = linked_list
    while current:
        new_list.append(current.val)
        current = current.next
    return new_list

l1 = list_to_linked_list([1,2,4])
l2 = list_to_linked_list([1,3,4])
mergedList = merge_two_lists(l1, l2)
result = linked_list_to_list(mergedList)
print(result)