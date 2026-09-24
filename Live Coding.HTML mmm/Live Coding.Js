
console.log("Hello, World!");


//statement
let girl = "Nkem";

//expression
let score = (2 + 6) * 4;console.log(score);

//case sensitive
let fineGirl = "Munirat";
console.log(fineGirl);

//variables
// assogns a name to a vlue 
/*
  identifier (name) = value;
  */

  //declaration is letting js know the name of the container that wiill hold a value 
 let  _finegirl

 // intialisation is assigning a value to the variable
    _finegirl = "Emmanuella";

    let fineboy = "Adebayo";

    //const keyword
    //this means that if you can  initialise a variable when you
    const myName = "Kachio";
    console.log(myName); 

    //Datatype 
    /*Numbers
    1234567890
    integers
    floats
    Nan - Not a number
*/

const myInt = 5;
const myFloat = 7.7;

console.log(typeof myInt);

// common operators
// +, -, *, /, ++, --, **, %

let tester = 0;
console.log(tester++);
 tester += 9;

//tester++ is trying to do this tester = tester + 1;
console.log(tester++); 

// strings ''

// concatenation +

let quote1 = "Today is he Lord has made ";
let quote2 = "I will rejoice and be glad";

console.log(quote1 + " " + quote2);

//template literal
let fullQuote = `${quote1}
${quote2}`;
console.log(fullQuote);

//string methods
let test = *House*;
let tester1 = *house*

// control flow
// conditional statemenet

// if (condition) statement
 
/*if (condition) {
a lot of things happen here
}

else{
  give her nothing
}

 ternary operator - has 3 parts
let result * comdition ? value1 : value2;

*/

// task

let season = "Harmattan";
let response;
 
if(seaso === "sumer") {
  response = "This Weather is very hooot*;
  // lot of functionality to run
}

// else if() {

// }

// else if() {

// }


//else if (season === "spring") {
  // response = * E too dey rain for spring*;
//}

else {
response = *Omo i do not know what season this is  :)))*;
} 

response = (season === *summer*)
? *The weather is hot*
: *I am not sure  what is happening to my keyboard*:

console.log(response);

//switching

switch (season) {
  case *summer*:
    response = *The weather is hot*;
    console.log(*help we are hungry);
    //a lot of statemenet can be
    //break;
    default:
      response = *I am not sure what is happening to my keyboard*;
      console.log(*I got here when I was not meant to*)
}

//continue
//loops
// I want to repeat something based on a condition;

let girl2 = 2;

/* synrax for while loop
 initializer
 while(condition) {
 - do something
 
 - skip an iteration with the contiune keyword

 - exit a loop with the break key word

 }
*/

let randomize = () = Math.floor(Math.romdom() * 10);
let randomNumber = 0;

while(randomNumber === 4) {
  console.log("randomNumber at the start: " + randomNumber);
  randomNumber++;
  if(randomNumber === 2) {
    continue;
  }
  console.log("Lop iteration count: " + randomNumber);
 }
 
//  let a = 3;
//  let b = 4;
//  let c = a + b;
//  console.log(c);

// for loop
/*for (initializer, condition, final-expressioin){
}
*/*

for(let g = 0; g < 5;) {
  const answer = '${g} * ${g * g} ':
  g++
  console.log(answer);
}

// for of loop - used to read through arrayes
// for (let student of studebt) {
// Console.log(students);
//}


for(let i = 0; i < student.length; i++){
  console.log(students[i]);
}

// for - practice again when we do objects on saturday
const myObject + {"name"; "moyin"; "role"; : "Student Boss"} ;



//for of loop
for(let student of students) {
  console.log(student);
}

for(let i = 0; i < students.length; i++) {
  if(i === 3) {
    console.log("I an thrid`")
  }

  console.log(students [i]);
}

//  takes
// 1. write a loop to iterate through the student the student array
// 2. During each loop - check if the array item is equel to Teacher
//  - if it is eqal to teacher, console.log item and concatenate not a student to the end  
//  - if it isn't, console.log the item concatenate is a student to the end

const students = ["Munirat", "Oyin", "Kaycee", "Trix", "Aristotess", "Emmanuella", "Okpala", "Teacher", "Bad Guy", "Mmesoma"]

// for(let i = 0; i < students.length; i++) { 
//   if(students[i] === "Teacher" || students[i] === "bad Guy") {
//     console.log("${students[i]} is not a srudent")
//   }
//   else{
//     console.log("${students[i]} is a student")
//   }
// }

// for(let student of students) { 
//   if(students[i] === "Teacher" || students[i] === "bad Guy") {
//     console.log("${students[i]} is not a srudent")
//   }
//   else{
//     console.log("${students[i]} is a student")
//   }
// }

// functions
/**
* this is a type of object
* used to execute code,
* it can receive data
* it can return a value
* log() - this is a long function
*/ 

//declare function
function myFunction(data,name,age) {
  // block of code that needs to be executed
  console.log(data,name,age)
}

function nameOfFuntion() {
// block of code
}

// this function will just add 3 to any value
function addThreeToValue(value) {
  return value + 3;
}

//invoke / call
myFunction("Mmesoma", "Guehi", "Great defender");

nameOfFountion();

let exmple = addThreeToValue(5)

// expressing a function 
// () =>{}
//addEventistener(() => {})

  () = >  {
      // block of code
  }

  const arsenalWinstheLeague = () => "Champions Champions";

  console.log(arsnalWinstheLeague());
  