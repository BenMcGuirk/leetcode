//Given the head of a sorted linked list delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Input: head = [1,1,2]
// Output: [1,2]

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

//my solution:
var deleteDuplicates = function(head) {
  for(let i = 1; i < head.length; i++) {
    if(head[i] <= head[i-1]) {
        head.splice(i, 1);
    }
  }  
  return head;
};

console.log(deleteDuplicates([1,1,2,3,3]));
console.log(deleteDuplicates([1,1,2]));

//leetcode solution:
var deleteDuplicates = function(head) {
  let current = head;
  while(current !== null && current.next !== null) {
      if(current.val === current.next.val) {
          current.next = current.next.next;
      } else {
          current = current.next;
      }
  }
  return head;
};