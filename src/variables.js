/*
Input:
a: a whole, positive number

Output:
plus5: a number that is the sum of 5 and `a`
asString: a string that is just `a` converted to a string
yourNumberIs: a string that says "Your Number is `x`." where `x` is replaced by
in input `a`
a: the original a number
*/
function variableModification(a) {
  'use strict';
  var plus5, asString, yourNumberIs, numValue;
  //your code here
  /* create the numeric output value 
  code samples found in article: http://javascript.about.com/library/blstrnum.htm
  */
  plus5 = 0; /* forces variable to be number */

  if (typeof a === "number") {
    numValue = parseInt(a, 10);
    plus5 = numValue + 5;
  }
  /* String converstion */
  asString = String(a);

  /* String concantenation */
  yourNumberIs = ["Your Number is '", asString, "'."].join("");

  //end your code
  return [plus5, asString, yourNumberIs, a];
}

/*
Input:
b: could be anything

Output:
return true if b is a primitive string value (also known as a string literal),
false otherwise
*/
function isString(b) {
  'use strict';
  var varIsString = true;

  if (typeof b === "string") {
    varIsString = true;
  } else {
    varIsString = false;
  }

  return varIsString;
}

/*
Input:
c: could be anything

Output:
return true if c is null, false otherwise
*/
function isNull(c) {
  'use strict';
  var varIsNull = true;

  if (c !== null || c === "undefined") {
    varIsNull = false;
  }

  return varIsNull;
}
