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
  let length = linkedList._length;

  // first loop, creating dict
  let currentNode = linkedList.head;
  let dict = {};
  let count = 0;
  while (count < length) {
    if (dict[currentNode.data]) {
      dict[currentNode.data]++;
    } else {
      dict[currentNode.data] = 1;
    }
    currentNode = currentNode.next;
    count++;
  }

  // second loop
  currentNode = linkedList.head;
  count = 0;
  while (count < length) {
    if (dict[currentNode.data] > 1) {
      dict[currentNode.data]--;
      currentNode.data = 'CONSIDER DELETED';
      console.log(currentNode.data);
    }
    currentNode = currentNode.next;
    count++;
  }

  // third loop (delete, just for viewing nodes)
  currentNode = linkedList.head;
  count = 0;
  while (count < length) {
    console.log(count, " :", currentNode.data);
    currentNode = currentNode.next;
    count++;
  }

  return linkedList;
}


let test1 = new SinglyList();
test1.add('three');
test1.add('one');
test1.add('two');
test1.add('three');
test1.add('four');
test1.add('four');
let test2 = new SinglyList();
test2.add('bir');
test2.add('yeki');
test2.add('ush');
test2.add('tort');
test2.add('bes');
test2.add('tort');
test2.add('tort');
test2.add('ush');
test2.add('bes');

console.log("removeDupes(test1):", removeDupes(test1));
// length should be 4
// console.log("removeDupes(test2):", removeDupes(test2));
// // length should be 5

/*
Pseudocode:
// loop through once, creating dictionary of node data
// where { dataVal: count }
// loop through linked list second time
// this time check if currentNode's count is higher than 1 in dict
// if true, delete node, else continue
// return linked list
// FOLLOW UP:
//
*/
