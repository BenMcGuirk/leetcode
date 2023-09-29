//you are given the heads of two sorted linked lists. Merge the two lists into one sorted linked list and return it.

//Example 1:
//Input: l1 = [1,2,4], l2 = [1,3,4]
//Output: [1,1,2,3,4,4]

//Example 2:
//Input: l1 = [], l2 = []
//Output: []

//Example 3:
//Input: l1 = [], l2 = [0]
//Output: [0]

//Solution 1: Iterative (**not working**)
//Time Complexity: O(n)
//Space Complexity: O(1)

function mergeTwoLists(list1, list2) {
    let dummy = new ListNode(-1);
    let head = dummy;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            head.next = list1;
            list1 = list1.next;
        } else {
            head.next = list2;
            list2 = list2.next;
        }
        head = head.next;
    }
    if(list1) head.next = list1;
    if(list2) head.next = list2;
    return dummy;
};

//console.log(mergeTwoLists([1,2,4], [1,3,4])); //[1,1,2,3,4,4]
//console.log(mergeTwoLists([], [])); //[]
//console.log(mergeTwoLists([], [0])); //[0]

//Youtube Solution (**not working**)
//Time Complexity: O(n)
//Space Complexity: O(1)

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var mergeTwoLists2 = function(l1, l2) {
    let newList = new ListNode();
    const dummy = newList;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            newList.next = l1;
            l1 = l1.next;
        } else {
            newList.next = l2;
            l2 = l2.next;
        }
        newList = newList.next;
    }

    if (l1) {
        newList.next = l1;
    }
    if (l2) {
        newList.next = l2;
    }
    //console.log(JSON.stringify(dummy.next));
    return dummy.next;
};

function listToArray(head) {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
};

function arrayToList(arr) {
    if (!arr.length) {
        return null;
    }
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

const l1 = arrayToList([1,2,4]);
const l2 = arrayToList([1,3,4]);

const merged = mergeTwoLists2(l1, l2);
console.log(listToArray(merged));

//mergeTwoLists2([1,2,4], [1,3,4]); //[1,1,2,3,4,4]
//mergeTwoLists2([], []); //[]
//mergeTwoLists2([], [0]); //[0]



//my final attempt (create linked lists, for some reason they give arrays at inputs not linked lists)
function Node(data, next) {
    this.data = data;
    this.next = next;
  } 
  
  function merge(L1, L2) {
    
    // create new linked list pointer
    var L3 = new Node(null, null);
    var prev = L3;
    
    // while both linked lists are not empty
    while (L1 !== null && L2 !== null) {
      if (L1.data <= L2.data) { 
        prev.next = L1;
        L1 = L1.next;
      } else {
        prev.next = L2;
        L2 = L2.next;
      }
      prev = prev.next;
    }
    
    // once we reach end of a linked list, append the other 
    // list because we know it is already sorted
    if (L1 === null) { prev.next = L2; }
    if (L2 === null) { prev.next = L1; }
    
    // return the sorted linked list
    return L3.next;
    
  }
  
  // create first linked list: 1 -> 3 -> 10
  var n3 = new Node(10, null);
  var n2 = new Node(3, n3);
  var n1 = new Node(1, n2);
  var L1 = n1; 
  
  // create second linked list: 5 -> 6 -> 9
  var n6 = new Node(9, null);
  var n5 = new Node(6, n6);
  var n4 = new Node(5, n5);
  var L2 = n4; 
  
  //console.log(merge(L1, L2)); // 1 -> 3 -> 5 -> 6 -> 9 -> 10