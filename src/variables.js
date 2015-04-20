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
  var plus5;
  var asString;
  var yourNumberIs;
  //your code here
  var numValue;
  /* create the numeric output value 
  code samples found in article: http://javascript.about.com/library/blstrnum.htm
  */
  plus5 = 0; /* forces variable to be number */
  numValue = parseInt(a,10); 
  if (numValue != a) alert('not a number')
    else
      {
        plus5 = numValue + 5;
      };
  /* String converstion */
  asString = String(a);

  /* String concantenation */
  yourNumberIs = "Your Number is '".asString."'.";

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
  var varIsString = true;

  if (typeof b=="string") {
    varIsString = true;
  }
  else {
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
  var varIsNull = true;

  if (c!==null) {
    varIsNull = false;
  };

  return varIsNull;
}
