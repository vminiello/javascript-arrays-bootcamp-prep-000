var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var candyString = "foo"

function addElementToBeginingOfArray(chocolateBars, candyString) {
  return ["candyString", ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString) {
  chocolateBars.unshift("candyString");
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, candyString) {
  return [...chocolateBars, "candyString"]; 
}

function destructivlyAddElementToEndOfArray(chocolateBars, candyString) {
  chocolateBars.push("candyString");
  return chocolateBars;
}
function acceessElementInArray() {
  
}