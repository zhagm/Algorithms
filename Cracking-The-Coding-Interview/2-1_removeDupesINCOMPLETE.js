// Instructions:
// Write code to remove duplicates from an unsorted linked list.
// FOLLOW UP:
// How would you solve this problem if a temporary buffer is not allowed?


// Linked List creation and functions
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

function removeDupes(linkedList) {

}


let test1 = new SinglyList();
test1.add('three');
test1.add('one');
test1.add('two');
test1.add('three');
test1.add('four');
test1.add('four');
let test2 = new SinglyList();
test1.add('bir');
test1.add('yeki');
test1.add('ush');
test1.add('tort');
test1.add('bes');
test1.add('tort');
test1.add('tort');
test1.add('ush');
test1.add('bes');

console.log("removeDupes(test1):", removeDupes(test1));
// length should be 4
console.log("removeDupes(test2):", removeDupes(test2));
// length should be 5

/*
Pseudocode:
// loop through once, creating dictionary of node data
// where { dataVal: count }
// loop through obj, check if count > 1, add to array of dupes
// loop through linked list second time
// this time check if currentNode's data is in the dupes array
// if true, delete node, else continue
// return linked list
// FOLLOW UP:
//
*/
