console.log('recomendation');

const items = [
  {
    id: 1,
    title: 'Jurassic Park Original Bones Backpack',
    price: '19.99',
    img: 'img/bp8uq9jpa-5.jpg',
  },
  {
    id: 2,
    title: 'Sonic The Hedgehog Adult Unisex Gaiter',
    price: '7.49',
    img: 'img/ga9llfseg-4.jpg',
  },
  {
    id: 3,
    title: 'Star Wars Storm Trooper 7 #D Mug',
    price: '14.99',
    img: 'img/abymug362.jpg',
  },
  {
    id: 4,
    title: 'Star Wars Boba Fett Metal Keyring',
    price: '7.99',
    img: 'img/abykey083.jpg',
  },
  {
    id: 5,
    title: 'Jurassic Park Rangers Snapback Cap',
    price: '14.99',
    img: 'img/sb7ke3jpa-3.jpg',
  },
];

const items2 = [
  {
    id: 2,
    title: 'Sonic The Hedgedog Adult Unisex Gaiter',
    price: '7.49',
    img: 'img/ga9llfseg-4.jpg',
  },
  {
    id: 6,
    title: 'Pac-Man Maze SafE Ball Bearing Maze Money Box',
    price: '14.99',
    img: 'img/gifpal719-1.jpg',
  },
  {
    id: 7,
    title: 'Harry Potter Glasses & Scar Mens T-Shirt',
    price: '8.99',
    img: 'img/scar-glasses-black.jpg',
  },
  {
    id: 8,
    title: 'Batman Shiny Cape Knee High Socks',
    price: '9.99',
    img: 'img/kh101vbtm-1.jpg',
  },
  {
    id: 1,
    title: 'Jurassic Park Original Bones Backpack',
    price: '19.99',
    img: 'img/bp8uq9jpa-5.jpg',
  },
];

const graph = createGraph(false);

// Theo
for (let i = 0; i < items.length; i++) {
  graph.addNode(items[i]);
}
for (let e = 0; e < items.length - 1; e++) {
  graph.addEdge(items[e], items[e + 1]);
}

// Vinni
for (let i = 0; i < items2.length; i++) {
  graph.addNode(items2[i]);
}
for (let e = 0; e < items2.length - 1; e++) {
  graph.addEdge(items2[e], items[e + 1]);
}

const recommendation = graph.recommend();

const allItems = items.concat(items2);

// Menghapus id yang sama yaitu 5 dan 9
allItems.splice(5, 1);
allItems.pop();
console.log(allItems);
