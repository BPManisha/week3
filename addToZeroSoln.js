// Starting array it can contain any set of value or numbers to brgin with
let array = [28, 43, -12, 30, 4, 0, 12]

/here is my pseudo code and atual code/
// set the boolean value to false before parsing thru array numbers
// we will need to have 2 parsers to go thru all the elements in the array.
// it will also help to pick 2 different numbers from the array and now check whether 2 numbers add to zero or not
// if it adds to zero update the boolean variable to true else the for loop will move and pick next 2 numbers 
and will  continue till itparses all the elements in the array.

let value = false;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = true;
      } 
    }
  }
}

console.log(value)