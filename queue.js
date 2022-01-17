function createQueue() {
  let queue = [];
  return {
    //   masukkan data
    enqueue: function (value) {
      queue.unshift(value);
    },
    // mengeluarkan data
    dequeue: function () {
      queue.pop();
    },
    peek: function () {
      return queue[queue.length - 1];
    },
    size: function () {
      return queue.length;
    },
  };
}

const data = createQueue();

data.enqueue("sleep well ");
data.enqueue("hari ini mau main");
data.enqueue("olahraga");
data.enqueue("ngoding data stucture and react");
data.enqueue("deploy in vercel");

console.log(data.peek());
console.log(data.size());
