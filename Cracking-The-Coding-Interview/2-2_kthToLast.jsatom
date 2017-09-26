// Instructions:
// Implement an algorithm to find the kth to last element of a singly linked list

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

function returnKthToLast(linkedList, k) {
  if (k > linkedList._length || linkedList._length === 0) {
    throw new Error("Node does not exist");
  }
  let A = linkedList.head;
  let B = linkedList.head;
  let count = k;
  while (--k) {
    B = B.next;
  }
  while (B.next) {
    A = A.next;
    B = B.next;
  }
  return A;
}


let test1 = new SinglyList();
test1.add('wrong');
test1.add('incorrect');
test1.add('return me');
test1.add('error');
console.log("returnKthToLast(test1):", returnKthToLast(test1, 2));
// should return 'return me'

let test2 = new SinglyList();
test2.add('*');
test2.add('&');
test2.add('hello');
test2.add('#');
test2.add('%');
console.log("returnKthToLast(test2):", returnKthToLast(test2, 3));
// should return 'hello'

let test3 = new SinglyList();
test3.add('hello');
test3.add('#');
test3.add('%');
console.log("returnKthToLast(test3):", returnKthToLast(test3, 4));
// should return 'hello'

/*
Pseudocode:
// Use case #1: check if (k > l || l === 0) throw Error
// Use case #2: (everything else), have 2 runners, A is at x, B is
// always at x + k, until x + k reaches a node where the next val is null,
// in which case you return A
*/
