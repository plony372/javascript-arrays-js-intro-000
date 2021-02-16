var chocolateBars = ["snickers", "hundredgrand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, newElement){
  var newarray = [newElement, ...array]
  return newarray;
}

function destructivelyAddElementToBeginningOfArray(array, newElement){
  return array.unshift(newElement)
}

// these fuctions mutate the Array
// ".push" to add to the end of an Array
// .unshift to add to the begining of an Array

// these operator's will create a new Array in place
// var newarray = ["klik's", ...chocolateBars] this will create a new array with klik's added at index 0


