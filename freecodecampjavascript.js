const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';  //одинарные и двойные кавычки
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Escape-последовательности в строках
const myStr = "This is the start." + " This is the end."; // Change this line//сложение трок
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";//приставление строки для заданной переменной 
// Only change code below this line
const myName = "Polina";
const myStr = "My name is" + myName + "and I am well!"; переменная в строке
// Change code below this line
const someAdjective = "funny!";
let myStr = "Learning to code is ";
myStr += someAdjective;//сложение переменных со строчными элементами
//узнаем длину строки или переменной со строкой!!!!
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
lastNameLength.length;
//конец примера!!!!
// Setup найти первую букву в переменной
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line
//конец применра

// Setup 
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line


const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "Our " + myNoun + " " + "is " + myAdjective + ", and it " + myVerb + " " + "very " + myAdverb + "."; // Change this line
// Only change code above this line

// Only change code below this line
const myArray = ["string", 8];

const myArray = [50, 60, 70];
let myData = myArray[0];

const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';  //одинарные и двойные кавычки
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Escape-последовательности в строках
const myStr = "This is the start." + " This is the end."; // Change this line//сложение трок
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";//приставление строки для заданной переменной 
// Only change code below this line
const myName = "Polina";
const myStr = "My name is" + myName + "and I am well!"; переменная в строке
// Change code below this line
const someAdjective = "funny!";
let myStr = "Learning to code is ";
myStr += someAdjective;//сложение переменных со строчными элементами
//узнаем длину строки или переменной со строкой!!!!
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
lastNameLength.length;
//конец примера!!!!
// Setup найти первую букву в переменной
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line
//конец применра

// Setup 
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line


const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "Our " + myNoun + " " + "is " + myAdjective + ", and it " + myVerb + " " + "very " + myAdverb + "."; // Change this line
// Only change code above this line

// Only change code below this line
const myArray = ["string", 8];

const myArray = [50, 60, 70];
let myData = myArray[0];

const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];

// Setup
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
// Only change code below this line

// Setup
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();
// Only change code below this line

// Setup
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();
// Only change code below this line


// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

// Only change code below this line

function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();

function functionWithArgs(sum1, sum2) {
  console.log(sum1 + sum2);
}
functionWithArgs(2,6);

// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal here
oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
