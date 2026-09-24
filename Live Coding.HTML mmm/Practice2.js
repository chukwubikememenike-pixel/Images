/*
 3.  Events
 4.  Event Listerners
 5.  Prevent default behavior

 6.  Target refers to the element on which the event was  initially fired, while currentTarget refers 
 7.  Practice
      - Create an event listener that causes the text inside the button to change when it is clicked on., and change back when it is clicked again.
 8.  Arrsys
     - Create an array
     - Find the length of the arrray
     - Access and modify elements in the array
     -Add and remove elements from the array (pop, push, shift, splice)
     
 9.  Practice
     - Create three variables that hold references to <ul>, <input>, <p> and <button> elements. Also create an empty array called shoppingList - this will store your items as the user adds them.
     - Create a function that will run in response to the button being clicked.
     - Inside the function body, start by calling preventDefault(). Since the input is wrapped in a form elemenet, pressing the Enter key will treigger the form to submit. The call to preventDefault() will prevent the form from refreshing the page so a new item can be added to the list instead.
     - Contiune by storing the current value of the input in a variable and then push it into your shopping list.
     - Clear the input element and set  it to an empty string ("").
     - Create three new element - a <li>, <span>, and a <button> - and store each in a variables.
     - Append the span and button to the list item. Set the text content of the span to the saved input value, and set the text content of the button to Delete.
     - Append the <li> to the <ul> element.
     _ After appending,  update the <p> tag to reflect the current state of the array:
     - Attach an event handler to the Delete button so that, when clicked,
     - Removes the (<li> ... </li>) from the dom
     - Find the item in shoppingList using indexOf() and remove it with splice()
     - After every add and every delete, update the <p> tag to reflect the current state of the array:
     - Finally, use the focus() method to focus the input element, so it's ready for entering the next shopping list item.
     
 10. Homework - readon event bubbling event capturing and objects
*/


/* dom manipulation - Document (html file that you load up in the brower) object (this is created as an objext type) model (tree respresentation)*/

// select an elemenet and save the reference to a variable

//const a = document.querySelector("a");
// change the text content of the element


/* create a new node - you need a parent to add the node to
//const section = document.querySelector("section");

const newPara = document.createElement("p");
newPara.textContent = "This is a new paragraph that was created using javascript";

section.appendChild(newPara);

// removal of nodes
// section.removeChild(newPara);
newPara.remove();

// manipulation styles
a.style.backgroundColor = "red";
a.style.padding = "10px"
*/

// Events
// to react to event, you need to look out for it by using an evebt listener.
/** 
const btn = document.querySelector("button");

function callMe() {
    document.body.style.backgroundColor = "olive";
    console.log(e);
}

// btn.addEventListener("click", callMe);
// addEventListener("name of event", what do should happen)
// btn.removeEventListener("click", callMe)
// btn.onclick = callMe

// prevent default behaviour;

a.addEventListener("click", (e) => {
  e.preventDefault();
  confirm.log("Why are you doing this");
})
*/

//arrays

const sample = ["check", "trust", "headache"];

console.log(sample.length);

// array is an indexed collection with its first index at 0;
console.log(sample[2])

console.log(sample,indexOf("trust"));

// end of array
sample.push("Chelsea ooh :)");

// start of array
sample.unshift("Chelsea oooh :)");
console.log(sample)
//removes the last one in the array
sample.pop();
//removes the first one in the array
sample.shift();
console.log(sample);


/**
 Practice
     - Create three variables that hold references to <ul>, <input>, <p> and <button> elements. Also create an empty array called shoppingList - this will store your items as the user adds them.
     - Create a function that will run in response to the button being clicked.
     - Inside the function body, start by calling preventDefault(). Since the input is wrapped in a form elemenet, pressing the Enter key will treigger the form to submit. The call to preventDefault() will prevent the form from refreshing the page so a new item can be added to the list instead.
     - Contiune by storing the current value of the input in a variable and then push it into your shopping list.
     - Clear the input element and set  it to an empty string ("").
     - Create three new element - a <li>, <span>, and a <button> - and store each in a variables.
     - Append the span and button to the list item. Set the text content of the span to the saved input value, and set the text content of the button to Delete.
     - Append the <li> to the <ul> element.
     _ After appending,  update the <p> tag to reflect the current state of the array:
     - Attach an event handler to the Delete button so that, when clicked,
     - Removes the (<li> ... </li>) from the dom
     - Find the item in shoppingList using indexOf() and remove it with splice()
     - After every add and every delete, update the <p> tag to reflect the current state of the array:
     - Finally, use the focus() method to focus the input element, so it's ready for entering the next shopping list item.
     
 */

// step 1, create 4 variables

const btn = document.querySelector("button");
const input = document.querySelector("input");
const list = document.querySelector("ul");
const para = document.querySelector(".summary");

const shoppingList = [];

//step 2,
function addItemToList(e) {

// step3,
e.preventDefault();

// step 4,
const inputValue = input.value.trim();
// if empty - stop working
if(!inputValue) return;
shoppingList.push(inputValue);

// step 5,
input.value = "";

// step 6,
const li = document.createElement("li");
const span = document.createElement("span");
const button = document.createElement("button");

// step 7
span.textContent = inputValue;
button.textContent = 'Delete';
li.append(span, button);
// li.appendChild(span);
// li.appendChild(button);

// step 8
list.append(li);

// step 9,

// step 10
button.addEventListener("click", funtion() { 
    const index = shoppingList.indexOf(span.textContent);
    shoppingList,splice(index, 1):
    li,remove();
    if(shoppingList,legth => O) {
    para.textContent = "Shopping list is empty"
}
else {
    para,textContent = 'You have ${shoppingList.length} item (s) in list'
}
})

// step 11,
input.focus();
}

btn.addEventListener("click", addItemToList);
