let fruit = {
  name: 'grape',
  description: 'Popular and famous fruit',
  colors: ['purple', 'green'],
  isSmal: true,
  order: 1,
  owner: 'Andi',
};

// how to acces data in object:
console.log(fruit['name']);
console.log(fruit.description);
console.log(fruit.owner || 'Riza');

// access with Object.keys

const key = Object.values(fruit);
const values = Object.values(fruit);
console.log('ini key :', key, 'ini value :', values);
