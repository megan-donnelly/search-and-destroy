'use strict';

//Complete this algo
const isLoop = linkedlist => {
  let nodes = {};
  let current = linkedlist.head;
  while (current) {
    if (nodes[current.value]) return true;
    nodes[current.value] = true;
    current = current.next;
  }
  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
