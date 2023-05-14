// Queue is Data stucture with analogy first in fist out
// Queue adalah stuktur data yang mengimplementasikan datang pertama keluar pertama

function createQueue() {
  const queue = [];

  return {
    // awal atau front
    enqueue: function (value) {
      queue.unshift(value);
    },

    // akhir atau back
    dequeue: function () {
      queue.pop();
    },

    // mengetahui isinya / peek
    peek: function () {
      return queue[queue.length - 1];
    },

    // mengetahui ukuran atau size
    size: function () {
      return queue.length;
    },
  };
}

// example customer in bank
const q = createQueue();
q.enqueue('Andi');
q.enqueue('Rahmat');
q.enqueue('Rini');
q.enqueue('Lina');
q.enqueue('Anggi');

q.dequeue();

console.log(q.peek());
