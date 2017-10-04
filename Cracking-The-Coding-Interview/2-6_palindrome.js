// Instructions:
// Implement a function to check if a linked list is a palindrome.

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

function palindrome(x) {
  let temp = [];
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
let test3 = new SinglyList();
test3.add('a');
test3.add('b');
test3.add('c');
test3.add('c');
test3.add('b');
test3.add('a');
test3.add('a');
console.log("palindrome(test1):", palindrome(test1));
console.log("palindrome(test2):", palindrome(test2));
console.log("palindrome(test3):", palindrome(test3));
// answer

/*
Pseudocode:
//
*/
