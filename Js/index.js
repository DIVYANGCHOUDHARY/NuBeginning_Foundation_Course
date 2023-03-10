document.write("This is document.write")
// JavaScript console API's
console.log("Divyang Choudhary")
alert("me");
console.warn("This is an warning")
console.error("This is an error")
console.clear("this will clear the screen")
console.assert(4 == (6-2))
console.assert(4 == (6-1))

// JavaScript Variables(Containers to store data values)
var n= 34;
var n1= 56;

console.log(n+n1);

// Data types in Js

//1. String datatype
var s= "This is a string";
console.log(s)
var s1= 'This is a second string';
console.log(s1)

//2. Numberdatatype
var n2= 5346;
console.log(n2);

//3. Objects
var c={
    dc: 22,
    itsdc: 21,
    Divyang: 100
}
console.log(c)

//4. Booleans
var a= true;
// console.log(a);
var b= false;
// console.log(b);
console.log(a, b)

//5. Undefined
var u= undefined;
console.log(u)
var u1;
console.log(u1);

//6. NULL
var nu= null;
console.log(nu)

//7. Symbol

//8. BigInt

/*
    At a veru high level, there are two types of dataTypes in Js
    1. Primitive data types: undefined, null, numbers, string, boolean, symbol
    2. Reference data types: Arrays and Objects
*/

var arr= [1,2,"bablu",4,5]
console.log(arr[2])

/* Operators in Js */

// Arithematic Operators
var a= 34;
var b= 56;

console.log("The value of a+b is =", a+b);
console.log("The value of a-b is =", a-b);
console.log("The value of a*b is =", a*b);
console.log("The value of a/b is =", a/b);
console.log("The value of a%b is =", a%b);

// Assignment Operators
var c= b;
console.log(c);

// Comparison Operators
var x= 34;
var y= 56;

console.log(x==y);
console.log(x!=y);
console.log(x>=y);
console.log(x<=y);
console.log(x>y);
console.log(x<y);

// Logical AND/OR Operators
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// Logical Not
console.log(!false)
console.log(!true)

// Functions
// DRY= Do Not Repeat urself
function avg(a,b){
    return (a+b)/2;
}

c= avg(12,12);
c1= avg(14,6);

console.log("The average of c and is = ",c, c1);

// Conditionals in Js

var age= 11;
if(age>18){
    console.log('You can drink rasna water');
}
else{
    console.log("You cannot drink rasna water");
}

// Loops

var arr= [1,2,3,4,5,6,7];
console.log(arr);

// for_loops
console.log("Using for loop")
for(var i=0; i<arr.length; i++){
    console.log(arr[i])
}

// for_each loops
console.log("Using forEach loop")
arr.forEach(function(element){
    console.log(element)
})

console.log("Using While loop")
let j=0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}

console.log("Using do while loop");
do{
    console.log(arr[j]);
    j++;
}while(j<arr.length);

// Use of break and continue
var a= [1,2,3,4,5,6,7,8];
console.log("Using break")
for(var i=0; i<a.length; i++){
    if(i==2) break;
    console.log(a[i])
}

console.log("Using break")
for(var i=0; i<a.length; i++){
    if(i==2) continue;
    console.log(a[i])
}

// Array methods
let myArr= ["Fan","Camera",34,null,true];
console.log(myArr)
console.log(myArr.length)
myArr.pop();
console.log(myArr)
myArr.push("Divyang Choudhary")
console.log(myArr)

// shift() removes the first element from the list/array
myArr.shift()
console.log(myArr);

// unshift() adds from the first element in the list/array
myArr.unshift("Divyang Choudhary")
console.log(myArr);

// The below syntax returns the new length of the array
console.log(myArr.unshift("dc"));

const newLen= myArr.unshift("itsdc");
console.log(newLen);

console.log(myArr.toString());

d= [1, 4, 6, 43, 23, 32324]
console.log(d.sort())

// String Methods in Js
let myLovelyString= "DC is a good boy achcha good";
console.log(myLovelyString.length)
console.log(myLovelyString.indexOf("good"))
console.log(myLovelyString.lastIndexOf("good"))

// Slicing  
console.log(myLovelyString.slice(1,4))

d= myLovelyString.replace("DC", "Divyang Choudhary")
console.log(d, myLovelyString)
console.log(d)

let myDate= new Date();
console.log(myDate)
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());

// DOM Manipulation
let elem= document.getElementById('click');
console.log(elem);

let elemClass= document.getElementsByClassName("container");
console.log(elemClass);
// elemClass[0].style.background= "yellow"
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success")

console.log(elemClass[0].innerHTML);
console.log(elemClass[0].innerText);

tn= document.getElementsByTagName('button')
console.log(tn);
createdElement= document.createElement('p');
createdElement.innerText= "This is a created para";
tn[0].appendChild(createdElement)

createdElement1= document.createElement('b');
createdElement1.innerText= "This is a created bold";
tn[0].replaceChild(createdElement1, createdElement);

// removeChild(element); ----> removes an elements

//Selecting using Query
sel= document.querySelector('.container')
console.log(sel)

sel= document.querySelectorAll('.container')
console.log(sel)

function clicked(){
    console.log('The button was clicked');
}

window.onload= function(){
    console.log('The document was loaded')
}

// Events in Js
firstContainer.addEventListener('click',function(){
    console.log("clicked on container")
})

firstContainer.addEventListener('mouseover', function(){
    console.log("Mouse on Container")
})

firstContainer.addEventListener('mouseout', function(){
    console.log("Mouse out of container")
})

firstContainer.addEventListener('mouseup', function(){
    console.log("Mouse up when clicked on Container")
})

firstContainer.addEventListener('mousedown', function(){
    console.log("Mouse down when clicked on container")
})

firstContainer.addEventListener('click', function(){
    document.querySelectorAll('.container')[1].innerHTML= "<b>We have clicked</b>"
    console.log("Clicked on Container")
})

let prevHTML= document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener('mouseup', function(){
    document.querySelectorAll('.container')[1].innerHTML= prevHTML;
    console.log("Mouse up when clicked on container");
})

firstContainer.addEventListener('mousedown', function(){
    document.querySelectorAll('.container')[1].innerHTML= "<b>We have clicked</b>"
    console.log("Mouse down when clicked on container");
})

// Normal function
function sum(a, b){
    return a+b;
}

// Arrow function
sum= (a, b)=>{
    return a+b;
}

// SetTimeout and SetInterval
logkaro=()=>{
    document.querySelectorAll('.container')[1].innerHTML= "<b>Set interval fired</b>"
    console.log("I am your log")
}

clr= setTimeout(logkaro, 2000);

// The below syntax will display after every 2seconds
clr= setInterval(logkaro, 2000)

// clearInterval(clr) & clearTimeout(clr) are used to cancel setInterval & setTimeout

// Local Storage
