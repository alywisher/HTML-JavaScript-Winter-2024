//example of regular string
var name = "aly";
var lastName = "wisher";
//example of string literal
var message = `Hello Welcome to the JavaScript Lesson ${name}`;
//console.log(message);
outputToConsole(message)
//alert(message);
//example of traditinal string concatination
var message2 = "hello" + name + " " + lastName + "welcome to the JavaScript lesson";
//console.log(message2);
outputToConsole(message2);
var addProblem = 12 + 4;
//console.log(addProblem);
outputToConsole(addProblem);
function outputToConsole(data){
    console.log(data);
}
var myButton = document.querySelector("button");
//add event listiner to button
myButton.addEventListener("click", changePage);
function changePage(){
    document.getElementById("header").innerHTML = message2;
    document.querySelector('body').style.backgroundColor = "pink";
}
//var yourName = prompt("Please enter your name.");
//document.querySelector('h1').innerHTML = `hello ${yourName} thanks for entering your name!`;
var dataPromptBudtton = document.getElementById("promptButton");
dataPromptBudtton.addEventListener('click',dataPrompt);
function dataPrompt(){
    alert(`my name is ${name}`);
    var yourName = prompt("please tell me your name.");
    alert(`Hello ${yourName} nice to meet you.`);

    var yourLastNme = prompt("please tell me your last name.");
    alert(`great your full name is ${yourName} ${yourLastNme}!`);

    var firstNumber = prompt("Lets add some numbers, enter the first number:");
    var secondNumber = prompt("ok now enter the second number:");

    var result = Number(firstNumber) + Number(secondNumber);
    alert(`The result is ${result}`);

    var documentBody = document.querySelector('body');
    var outputData = document.createElement('p');
    outputData.innerHTML = `your name is ${yourName} ${yourLastNme}<br>The result of your numbers is ${result}<br>Thanks from ${name} ${lastName}`
    documentBody.appendChild(outputData);
}