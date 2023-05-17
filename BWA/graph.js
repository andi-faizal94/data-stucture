// Graph
// Digunakan untuk relasi
// Digunakan juga untuk rekomendasi

function createNode(key) {
  const neighbors = [];
  return {
    key,
    neighbors,
    addNeighbor: function (node) {
      neighbors.push(node);
    },
  };
}

function createGraph(directed = false) {
  const nodes = [];
  const edges = [];
  return {
    directed,
    nodes,
    edges,
    addNode: function (key) {
      const newNode = createNode(key);
      nodes.push(newNode);
    },
    getNode: function (key) {
      return nodes.find((node) => {
        return node.key === key;
      });
    },
    addEdge: function (node1key, node2key) {
      const node1 = this.getNode(node1key);
      const node2 = this.getNode(node2key);
      node1.addNeighbor(node2);

      if (!directed) {
        node2.addNeighbor(node1);
      }
    },
    print: function () {
      return nodes
        .map(({ key, neighbors }) => {
          let result = key;
          if (neighbors.length) {
            result += ` => ${neighbors
              .map(function (neighbor) {
                return neighbor.key;
              })
              .join(' ')}`;
          }

          return result;
        })
        .join(' \n');
    },
  };
}

// const graph = createGraph(true);

// graph.addNode('Ani');
// graph.addNode('Banu');
// graph.addNode('Dina');
// graph.addNode('Cindy');
// graph.addNode('Elisa');
// graph.addNode('Fadli');

// // menambahkan relasi
// graph.addEdge('Ani', 'Banu');
// graph.addEdge('Banu', 'Cindy');
// graph.addEdge('Banu', 'Dina');
// graph.addEdge('Ani', 'Dina');
// graph.addEdge('Dina', 'Fadli');
// graph.addEdge('Elisa', 'Fadli');
// graph.addEdge('Fadli', 'Ani');

// console.log(graph.print());
