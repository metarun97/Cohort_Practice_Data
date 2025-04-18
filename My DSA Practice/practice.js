let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));

for (let i = n; i >= 1; i--) {
  console.log(i);
}
