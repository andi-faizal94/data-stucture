//stack in javascript

// function :push , pop ,peek ,length
let letter = [];

let word = "haloo";

let rword = "";
// put letter of word into stack
for (let i = 0; i < word.length; i++) {
  letter.push(word[i]);
}

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  rword += letter.pop();
}

if (rword === word) {
  console.log(`${word} is palindrome`);
} else {
  console.log(`${word} not palindrom`);
}

var Stack = function () {
  this.count = 0;
  this.storage = {};

  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function () {
    return this.count;
  };

  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

var myStack = new Stack();

myStack.push(0);
console.log(myStack.size);
console.log(myStack.size);
