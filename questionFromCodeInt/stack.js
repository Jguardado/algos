/**
 * initialize your data structure here.
 */

function HelperStack () {
  this.lowestValues = []
  this.currentLowest;
}

HelperStack.prototype.add = function (val) {
  this.lowestValues.push(val)
  console.log("what are we looking at in ADD", this.lowestValues)
  this.currentLowest = val
}

HelperStack.prototype.remove = function () {
  this.lowestValues.pop()
     console.log("what are we looking at in REMOVE", this.lowestValues)
  this.currentLowest = this.lowestValues[this.lowestValues.length - 1]
}

HelperStack.prototype.lowest = function () {
  console.log("what are we looking at in LOWEST", this.currentLowest)
  return this.currentLowest
}

var MinStack = function() {
  this.storage = [];
  this.min;
  this.helper = new HelperStack()
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  if (x < this.min) {
      this.min = x
      this.helper.add(x)
  }
  
  if (this.min === undefined) {
      this.min = x
      this.helper.add(x)
  }
  
  this.storage.push(x)
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.storage.pop()
  this.helper.remove()
  if (this.helper.lowest()) {
    this.min = this.helper.lowest()
  } else {
    const sortedArr = this.storage.sort((a,b) => (a-b))
    this.min = sortedArr[0]
  }
  
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.storage[this.storage.length -1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.min
};

const minStack = new MinStack();
minStack.push(2);
minStack.push(0);
minStack.push(3);
minStack.push(0);
const test1 = minStack.getMin(); //  --> Returns -3.
minStack.pop();
const test2 = minStack.getMin();
minStack.pop();
const test3 = minStack.getMin();
minStack.pop();
const test4 = minStack.getMin();
// const test3 = minStack.top();

//--> Returns -2.

console.log("TESTING : ", test1, test2, test3, test4)
// ["MinStack","push","push","push","push","getMin","pop","getMin","pop","getMin","pop","getMin"]
// [[],[2],[0],[3],[0],[],[],[],[],[],[],[]]

// [null,null,null,null,null,0,null,0,null,0,null,2]