//  example:
// summation(4) =10
// 1+2+3+4 = 10

function summation(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Time Complexity with Big O Notation
// Penyederhanaan dengan menggunakan Big O Notation dengan kecepatan yang lebih baik

function summation(n) {
  return (n * (n + 1)) / 2;
}
console.log(summation(4));

console.log(sum(4));
