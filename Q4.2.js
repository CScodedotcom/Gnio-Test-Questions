const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// used an array to assign my numbers to the variable num

function fizzbuzz(num) {
 if( num % 3 === 0 && num % 5 === 0){
  return "FizzBuzz" ;
 }
/**I made the mistake of putting this if statement at the end
 * so it was overidden by the others and "FizzBuzz" didn't show
 * So I moved it up here
 */

  else if (num % 3 === 0) {
  return "Fizz";
  }
  //For the multiples of 3

  else if (num % 5 === 0){
    return "Buzz";
  }
  //For the multiples of 5

  else return num;
  //returns just the number otherwise
}

for ( c of num ){
  console.log(fizzbuzz(c));
}

/**I made the mistake of running the code without the for of loop
 * so it just gave me the numbers back without the fizz buzz
 * So assigning each number to the variable c made the code run 
 * until all the numbers off the array went through the function 
 * and returned back the appropiate values or string
 */