// I'm using Q1 to test out my code:

function reverseStringA(str) {
  let product = "";

  for (let c = str.length - 1; c >= 0; c--){
    product = product + str[c];
  }
  return product;
}

console.log(reverseStringA("Claudia"));
console.log(reverseStringA("Hello world!"));
console.log(reverseStringA("123456789"));
//logging onto console and if there arent any erorrs my code should run flawlessly