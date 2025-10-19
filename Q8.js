function findNumber(num) {
  for (c = 1; c <= 5; c++){
    if(!num.includes(c))
      return c;
  }
  /**I chose to use a for loop in order to complete this
   * starting from 1 my condtion was  the loop adds one until it reaches 5
   * and if the array did not include any of the values, they would be returned.
   */
}

const num = [1 , 2 , 3 , 5];
console.log(`missing number: ${findNumber(num)}`);

// logged any values that have not been included in the array in this case the 4.












//total sum: 1+2+3+4+5=15