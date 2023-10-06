//given head, the head of a linked list, determine if the linked list has a cycle in it
//there is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer
//internally, pos is used to denote the index of the node that tail's next pointer is connected to
//note that pos is not passed as a parameter
//return true if there is a cycle in the linked list
//otherwise, return false

//example 1:
//input: head = [3,2,0,-4], pos = 1
//output: true
//explanation: there is a cycle in the linked list, where the tail connects to the 1st node (0-indexed)

//example 2:
//input: head = [1,2], pos = 0
//output: true
//explanation: there is a cycle in the linked list, where the tail connects to the 0th node

//example 3:
//input: head = [1], pos = -1
//output: false
//explanation: there is no cycle in the linked list

//my solution:

var hasCycle = function(head, pos) {
    if(pos < 0 || pos >= head.length-1){
        return false;
    } else {
        return true;
    }
};

console.log(hasCycle([3,2,0,-4], 1)); //true
console.log(hasCycle([1,2], 0)); //true
console.log(hasCycle([1], -1)); //false

//leetcode solution:

//two pointer approach
//time complexity: O(n)
//space complexity: O(1)
var hasCycle = function(head) {
    if(head === null || head.next === null){
        return false;
    }
    let slow = head;
    let fast = head.next;
    while(slow !== fast){
        if(fast === null || fast.next === null){
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
}
