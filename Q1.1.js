//trial without using the internet 

let str = 'Claudia';
// stored my name in the string
reverseStringA(str);
//named a function that will reverse the str variable, in this case my name


function reverseStringA(str) {
  let product = "";
  //this is the variable that stores the reversed string

  for (let c = str.length - 1; c >= 0; c--){
    /**This uses the length to start at the last letter. 
     * Then c assigns each number to the last letter of str.
     *  e.g a=6, i=5, d=4 ... c=0 */
    product = product + str[c];
   /**takes the current letter of c and adds it to the end of product. 
    * Starting with 6 and as c--; so "a" then "ai" then "aid" all the way to "aidualC" */
  }
  return product;
  //returns the reversed string as at the beginning we let product be an empty string.
}

console.log(reverseStringA(str));
//this logs it in the console.

