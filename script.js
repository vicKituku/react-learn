function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result +=
    "The " +
    " " +
    myAdjective +
    " " +
    myNoun +
    " " +
    myVerb +
    " " +
    " to the store " +
    myAdverb;
  return result;
}

// console.log(wordBlanks("dog", "big", "barked", "loudly"))

var ourArray = ["quicy", 1];
ourArray.push(["joe", "dex"]);
popped = ourArray.pop();
// console.log(ourArray[1])
// console.log(popped)

// Functions
function ourReusableFunction() {
  console.log("Hello Victor");
}

// ourReusableFunction();
// ourReusableFunction();

// passing values to functions
function functionWithArgs(a, b) {
  console.log(a + b);
}
// functionWithArgs(10, 5);

// Global Scope and functions

var myGlobal = 10;

function fun1() {
  let oopsGlobal = 5;
}

function fun2() {
  var output = "";

  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += "oopsglobal: " + oopsGlobal;
  }
  console.log(output);
}
// fun2();

// Local scope and functions

function myLocalScope() {
  var myVar = 5;
  console.log(myVar);
}
// myLocalScope();
// console.log(myVar);

// Global vs local scope

var outerwear = "T-shirt";
function myOutfit() {
  var outerwear = "Cardigan"
  return outerwear;
}

console.log(myOutfit())
