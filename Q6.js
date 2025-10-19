const artTools = ["canvas", "paintbrush", "oil paint"];
//my list of arTools

for (let c = 0; c < artTools.length; c++) {
  console.log(artTools[c]);
}
//I can use a for loop to go through the array and print out the values one by one

artTools[2] = "watercolour paint"
/**I can actually chnacge one of the values of the array
 * I chose index value 2 so the 3rd value "oil paint" will be changed to watercolour paint
*/ 

console.log(artTools[1]);
/**I can print out a specific value from the array
 * Since I selected the index value of 1, the 2nd value will be printed out
 */

artTools.push("apron");
//I researched how to do this but I can actually add on a value to the end of the array

console.log(artTools);
//finally I can just log them to the console and the final values in the array will be shown
