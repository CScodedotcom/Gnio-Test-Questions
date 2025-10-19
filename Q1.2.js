//trial using the internet

const stri = "Hello!";
const reversed = reverseStringB(stri);

function reverseStringB(stri) {
  return stri.split("").reverse().join("");
  /**using the split to seperate the characters 
   * Then  using .reverse to reverse the characters
   * and then .join to join the characters into a string from being seperated by commas.
  */
}

console.log(reversed);
//logging the function into the constant variable reverse.

