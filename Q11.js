// I'm using Q1 to test out my code:

function reverseStringA(str) {
  let product = "";

  for (let c = str.length - 1; c >= 0; c--){
    product = product + str[c];
  }
  return product;
}

console.log(reverseStringA("Claudia")); 
// expected output: aidualC
console.log(reverseStringA("Hello world!"));
//expected output: !dlrow olleH
console.log(reverseStringA("123456789"));
//expected output: 987654321
//logging onto console and if there arent any erorrs my code should run flawlessly