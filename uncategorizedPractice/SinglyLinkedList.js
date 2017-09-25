function Node(data) {
  this.data = data;
  this.next = null;
}

function SinglyList() {
  this._length = 0;
  this.head = null;
}

SinglyList.prototype.add = function(value) {
  let node = new Node(value);
  console.log(node);
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

SinglyList.prototype.search = function(position) {
  let currentNode = this.head;
  let length = this._length;
  let count = 1;

  // Use case #1: invalid position
  if (length === 0 || position < 1 || position > length) {
    throw new Error("Node does not exist");
  }

  // Use case #2: valid position
  while (count < position) {
    currentNode = currentNode.next;
    count++;
  }

  return currentNode;
}

SinglyList.prototype.remove = function(position) {
  let currentNode = this.head;
  let length = this._length;
  let count = 0;
  let beforeNodeToDelete = null;
  let nodeToDelete = null;
  let deletedNode = null;

  // Use case #1: invalid position
  if (length === 0 || position < 1 || position > length) {
    throw new Error("Node does not exist");
  }

  // Use case #2: first node is being removed
  if (position === 1) {
    this.head = currentNode.next;
    deletedNode = currentNode;
    currentNode = null;
    this._length--;

    return deletedNode;
  }

  // Use case #3: any other node is removed
  while (count < position) {
    beforeNodeToDelete = currentNode;
    nodeToDelete = currentNode.next;
    count++;
  }
  beforeNodeToDelete.next = nodeToDelete.next;
  deletedNode = nodeToDelete;
  nodeToDelete = null;
  this._length--;

  return deletedNode;
}


let list = new SinglyList();
list.add('one');
list.add('two');
list.add('three');
list.add('four');
console.log('search: \n', list.search(2));
console.log('remove: \n', list.remove(1));
console.log(list);
