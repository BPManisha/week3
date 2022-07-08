const decoder = code => {
  let splitStr = code.split('')
  let result = ''

  for (let i = 0; i < splitStr.length; i++) {
    if (!isNaN(+splitStr[i])) 
    //parse thru each character/number in the given string using NaN(not a number)
    //Each number tells you how many characters to skip before finding a  letter.
    // After each good letter should come the next next number.
    {
      i += +splitStr[i]
    } else {
      result += splitStr[i]
    }
  }

  return result
}


//ANOTHER APPROACH

//////
const decoder = code => {
  let output = '';
  for (let i = 0; i < code.length; i++){
    const numb = Number(code[i]);
    if (!isNaN(numb)) {
      i += (numb + 1);
    }
    output += code[i];
  }
  return output
}//////////////////
/////////////////////////////////////////////
var decode = function (text) {
  var output = "";
  var i = 0;
  while (i < text.length) {
    if (/\D/.test(text[i])){  // if character at current index is not a number
      output += text[i];      // add it to output
    } else {                  // otherwise 
      i += +text[i];          // add that number to current index in order
    }                         // to skip that many characters
    i++;
  };
  return output;
};///////////////////////////////////////////////////
















// decoder('0y4akjfe0s')
// decoder('0h2xce5ngbrdy')
// decoder('2bna0p1mp2osl0e')