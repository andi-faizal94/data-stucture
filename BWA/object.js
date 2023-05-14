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

// seach key
const key = Object.values(fruit);
// search values
const values = Object.values(fruit);
console.log('ini key :', key, 'ini value :', values);

// seach key and value

const entries = Object.entries(fruit);
console.log(entries);

// change value

fruit.price = 12000;
console.log(fruit);

// delete key and value in Object.
delete fruit.name;
console.log(fruit);
