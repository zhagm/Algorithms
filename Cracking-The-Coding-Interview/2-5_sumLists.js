// Instructions:
// ...

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


function sumLists(l1, l2) {
  let exp = 0;
  let count = 0;
  let link1 = l1.head;
  let link2 = l2.head;
  let sum = 0;
  while (Number.isInteger(link1.data) || Number.isInteger(link2.data)) {
    sum += (Math.pow(10, exp) * ((link1.data || 0) + (link2.data || 0)));
    link1 = link1.next || { data: null };
    link2 = link2.next || { data: null };
    exp++;
  }
  return sum;
}

let num1 = new SinglyList();
num1.add(1);
num1.add(0);
num1.add(1);
let num2 = new SinglyList();
num2.add(9);
num2.add(0);
num2.add(2);
num2.add(2);
console.log("sumLists(num1, num2):", sumLists(num1, num2));
// answer return 2310

/*
Pseudocode:
//
*/
