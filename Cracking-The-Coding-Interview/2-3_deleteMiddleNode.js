// Instructions:
// Implement an algorithm to delete a node in the middle (i.e., any node but the
// first and last node, not necessarily the exact middle) of a singly list, given
// only access to that node.

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

function deleteMiddleNode(linkedList, x) {
  if (x < 1 || x >= linkedList._length || linkedList._length === 0) {
    throw new Error("Node isn't in the middle or does not exist.");
  }
  let prevNode = null;
  let currentNode = linkedList.head;
  let count = 1;
  while (count !== x) {
    prevNode = currentNode;
    currentNode = currentNode.next;
    count++;
  }
  prevNode.next = currentNode.next;
  linkedList._length--;
  currentNode = null;
  return;
}

let test1 = new SinglyList();
test1.add('false');
test1.add('empty');
test1.add('null');
test1.add('undefined');
test1.add('0');
test1.add('NaN');
test1.add('');
console.log("deleteMiddleNode(test1, 2):", deleteMiddleNode(test1, 2), test1);
// length should be 4, without the 2nd node
let test2 = new SinglyList();
test2.add('first');
test2.add('last');
console.log("deleteMiddleNode(test2, 2):", deleteMiddleNode(test2, 2), test2);
// should throw an error

/*
Pseudocode:
//
*/
