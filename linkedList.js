function createNode(value) {
  return {
    value,
    next: null,
  };
}
function createLinkList() {
  return {
    head: null,
    tail: null,
    length: 0,
    push: function (value) {
      const node = createNode(value);
      if (this.head === null) {
        this.head = node;
        this.tail = node;
        this.length += 1;
      } else {
        this.tail.next = node;
        this.tail = node;
        this.length += 1;
        return node;
      }
    },
    pop: function () {},
  };
}
