// Instructions:
// Given two singly linked lists, determin if the two lists intersect. Return
// the intersecting node. Note that the intersection is defined based on reference, not value.

// Linked List functions
function Node(data) {
  this.data = data;
  this.next = null;
}

function SinglyList() {
  this.head = null;
  this._length = 0;
}

SinglyList.prototype.add = function(value) {
  let node = new Node(value);
  currentNode = this.head;

  // Use case #1: empty list
  if (!currentNode) {
    this.head = node;
    this._length++;
    return node;
  }

  // Use case #2: non-empty list
  while (currentNode.next) {
    currentNode = currentNode.next;
  }

  currentNode.next = node;
  this._length++;
  return node;
}
function intersection(x) {
  return x;
}

let test1 = new SinglyList();
test1.add('a');
test1.add('b');
test1.add('c');
test1.add('b');
test1.add('a');
let test2 = new SinglyList();
test2.add('a');
test2.add('b');
test2.add('c');
test2.add('c');
test2.add('b');
test2.add('a');
console.log("intersection(test1, test2):", intersection(test1, test2));
// answer

/*
Pseudocode:
//
*/
