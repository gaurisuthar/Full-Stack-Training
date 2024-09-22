// 1. Create an HTML file with a paragraph element. Write a JavaScript function to change the text
// content of the paragraph when a button is clicked.
// 2. Write a program that changes the background color of a <div> element to blue when the mouse
// hovers over it.
// 3. Write a JavaScript program that creates a new <li> element with some text and adds it to an
// existing <ul> list when a button is clicked.
// 4. Create a list of items. Write a function to remove an item from the list when a specific button next
// to it is clicked.
// 5. Create a simple HTML form with input fields for a user's name and email. Write JavaScript to
// display a message below the form that says 'Thank you for submitting, [name]!' when the form is
// submitted.
// 6. Write a program that adds an event listener to a button so that when it is clicked, an alert
// message is shown.
// 7. Create an HTML element with a class of 'hidden'. Write a JavaScript function that toggles this
// class when a button is clicked, showing and hiding the element.
// 8. Write a program that retrieves the value of an input field and displays it in another part of the
// document when a button is pressed.
// 9. Create an HTML element with some text that includes HTML tags. Write two JavaScript functions:
// one that retrieves the innerHTML and one that retrieves the textContent of the element, and display
// these values elsewhere on the page.
// 10. Write a JavaScript program that automatically updates the content of an element every second,
// displaying the current time


//Q1
document.getElementById("para").addEventListener("click",()=>{
    para.textContent="My name is Gauri Suthar";
});


//Q2
document.getElementById("box").addEventListener("mouseover",()=>{
    box.style.backgroundColor="blue";
});


//Q3
let clickBtn=document.getElementById("btn");
let myList=document.getElementById("list");

clickBtn.addEventListener("click",()=>{
    let newList=document.createElement("li");
    newList.textContent="Study";
    myList.appendChild(newList);
})

//Q4
let removeButtons = document.querySelectorAll('.removeBtn');
removeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.remove();
    });
});

//Q5
document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const name = document.getElementById('name').value;
    document.getElementById('thankYouMessage').innerText = `Thank you for submitting, ${name}!`; 
});

//Q6
const alertButton = document.getElementById('alertButton');

alertButton.addEventListener('click', () => {
    alert('Button was clicked!'); 
});

//Q7
const toggleButton = document.getElementById('toggleButton');
const toggleElement = document.getElementById('toggleElement');
toggleButton.addEventListener('click', () => {
    if (toggleElement.classList.contains('hidden')) {
        toggleElement.classList.remove('hidden');
    } else {
        toggleElement.classList.add('hidden');
    }
});

//Q8
const inputField = document.getElementById('inputField');
const displayBtn = document.getElementById('displayBtn');
const displayArea = document.getElementById('displayArea');
displayBtn.addEventListener('click', () => {
    const inputValue = inputField.value;
    displayArea.textContent = `You entered: ${inputValue}`;
});


//Q9
document.getElementById('getInnerHTML').addEventListener('click', () => {
    const myElement = document.getElementById('myElement');
    const innerHTML = myElement.innerHTML;
    document.getElementById('innerHTMLResult').textContent = `innerHTML: ${innerHTML}`;
});

document.getElementById('getTextContent').addEventListener('click', () => {
    const myElement = document.getElementById('myElement');
    const textContent = myElement.textContent;
    document.getElementById('textContentResult').textContent = `textContent: ${textContent}`;
});

//Q10
function updateTime() {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString(); 
    document.getElementById('currentTime').textContent = formattedTime;
}
setInterval(updateTime, 1000);
updateTime();