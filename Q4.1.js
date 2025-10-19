function fizzbuzz(num){
  for(c = 1; c <= num ; c++){
    /**I made a for loop so that later when the number is inputted,
     * it starts from one all the way until the number stated
     * and adds one for each step
     */
    if (c % 3 === 0) {
      console.log("fizz");
    }
    //for multiples of 3

    else if (c % 5 === 0){
     console.log("buzz");
    }
    //for multiples of 5

    else if( c % 3 === 0 && c % 5 === 0){
      console.log("FizzBuzz");
    }
    //for both

    else console.log(c);
    //otherwise any other numbers
  }

}

console.log(fizzbuzz(20));

//logging the function into the console with parameters being 20

//unsure why I get undefined after the value of 20