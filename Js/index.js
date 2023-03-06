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