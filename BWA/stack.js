// Stack is data struktur last in first out

function createStack() {
  let array = [];
  return {
    // push
    push: function (item) {
      array.push(item);
    },

    // pop
    pop: function () {
      array.pop();
    },

    // peek
    peek: function () {
      return array[array.length - 1];
    },

    // size
    size: function () {
      return array.length;
    },
  };
}

// example use stack in world case
// tumpukan buku yang ingin dibaca

const bookStack = createStack();
bookStack.push('The Effective Engineer');
bookStack.push('The Pragmatic Programmer');
bookStack.push('Start With Why');

bookStack.pop();
bookStack.pop();
bookStack.pop();
console.log(bookStack.peek());
console.log(bookStack.size());
