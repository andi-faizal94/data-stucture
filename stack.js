//stack in javascript

let letter = [];

let word = "haloo";

let rword = "";

for (let i = 0; i < word.length; i++) {
  //   console.log(word[i]);
  letter.push(word[i]);
  //   console.log(letter);
}

for (let i = 0; i < word.length; i++) {
  rword += letter.pop();
  //   console.log(rword);
}

if (rword === word) {
  console.log(`${word} is palindrome`);
} else {
  console.log(`${word} not palindrom`);
}
