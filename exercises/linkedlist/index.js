// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(data){
    this.head = new Node(data, this.head);
  }

  size(){
    let counter = 0;
    let node = this.head;

    while(node){
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst(){
    return this.head;
  }

  getLast(){
    let node = this.head;
    // account for empty list
    if(!node) return null;

    while(node){
      if(!node.next){
        return node;
      }
      node = node.next
    }
  }

  clear(){
    return this.head = null;
  }

  removeFirst(){
    let node = this.head;
    // account for empty list
    if(!node) return null;
    this.head = node.next;
  }

  removeLast(){
    // account for empty list
    if(!this.head) return null;
    // account for only one node in list
    if(!this.head.next) return this.head = null;
    // need reference to previous node
    let previous = this.head;
    let node = this.head.next;
    while(node.next){
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data){
    const last = this.getLast();
    // account for empty list and add new node at head
    if(last){
      // there are some existing node
      last.next = new Node(data);
    }else{
      // the list is empty
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let node = this.head;
    // account for no nodes
    // if(!node) return null;  // don't need this as if node is falsy the function returns null anyway

    let counter = 0;

    // account for only one node not at index n
    // if(index > this.size()) return null; // this makes us iterate through list twice so not most efficient way to do this
            // just return null at end if nothing is found :-)
    while(node){
      if(counter === index){
        return node;
      }
      counter++;
      node = node.next;
    }

    return null;
  }

  removeAt(index) {
    // just need to point previous nodes next element to the next node after the one we are removing

    // EDGE CASES
      // No elements in list
      if(!this.head) return null;
      // remove at index 1 but only one element
      if(index === 0) {
        this.head = this.head.next;  // could also set to null but this does the same thing
        return;
      }

      const previous = this.getAt(index - 1);
       // remove at index 10 when only 5 elements  - Out of bounds OR index is one more than length of list
      if(!previous || !previous.next) return null;

      previous.next = previous.next.next;
  }

  insertAt(data, index){

    const listSize = this.size();

    // nothing in list OR insert at index 0
    if(!this.head || index === 0){
      this.insertFirst(data);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast()
    // out of bounds OR index === listSize + 1
    if(!previous || !previous.next) this.insertLast(data);

    // insert middle
      // update previous ref and next ref
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(func){

  }
}

module.exports = { Node, LinkedList };
