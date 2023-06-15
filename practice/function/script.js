/// ----First-class function
/* when function are treated like any other variable. Function can be passed as an argument to other function
, can be returned by another function and can be assigned as a value to a variable. 


1. */

// Assigning function to a variable
// const foo =() =>{ // assigning anonymous function in variable
//     console.log("foobar")
// }
// foo(); // using variable to invoke the function by adding the parenthesis() at the end

// // passing function as an argument

// function say(){
//     return hello;
// }
// function greeting(hellomsg, name){
//     console.log(hellomsg()+name);
// }
// greeting(say, "john")// here passing say() function as an argument to greeting() function
// hello, john!

//-- the function that we pass as an argument to another funtion is called callback function, say()is callBack

//------CALLBACK FUNCTION-----
/* A callback function is a function passed into another function as an argument, which is then invoked 
inside the outer function to complete some kind of routine or action. */

// function logging(callBackFunc){
//     console.log('logging')
//     callBackFunc(1,2)
// }
// function add(a, b){
//     console.log(a+b)
//     return a+b;
// }
// logging(add) // here add means pass the value of add (i.e 3). for the excution we go for add();
// output of above code is logging and 3 so requirement of above code is ->need to log and then you need to add
//so here we are saying that logging function first u do your action and after that u execute add function.



// not only passed the function as an argument but u can also return the funtion



// function------>
//1. function declaration 
// function sum(){

// }

// 2. function Expression ->

// const sum = function(a, b){
//     return a+b;
// }
// let result = sum(1, 2);
// console.log(result); // 3

// Difference between sum() vs sum

/* when we write "const sum =fun()" then sum donot contain the whole function it only contains the address of 
function in heap where it stored and when we write "sum()" so it means go to the function in heap and 
execute it */

// for eg
// const abc = function(){
//     console.log("hey there")
// }
// if we ask for abc -> 
/*f() {
    console.log("hey there")
}  -> means its giving ans*/

// if we ask for abc() ->
//hey there -> and it giving output after excution


// ---named Function
// function abc(){

// }

 // ---anonymus function
// const sum1 = function(){

// }

// -----ARROW FUNCTION---
/* in this function we dont need to use function keyword but we need what type of argument this function need */

// const sumArrow =(a,b) =>{ // a, b are arguments
// return a+b;
// }
// let resultArrow = sumArrow(1, 2);
// console.log(resultArrow, "sumArrow");

 
//--------------------HIGHER ORDER FUNCTION----------------
//the function which can return a function is higher order function
// the function which can accept a function as an argument or return for eg function logging which we take in callBack func 




// -----REST OPERATORS---------
// SYNTAX -> (...)

function child(name, standard, rollNumber,...otherInfo){ // so here "..."is used for other information
console.log(name, standard, rollNumber)

console.log(otherInfo)
}
console.log("-------Child Info-----")
child("surbhi", "6th stand", 2, "Parent Father", "Parent Mother", "Delhi") // so it give other info in an array

// ------ default value of an argument-----
function child(name, standard, rollNumber=1){ //so if rollNumber value is not given then give it defaultvalue 1
    console.log(name, standard, rollNumber)
}

child("Nikhil", "5th class") // Nikhil 5th class  1
child("Nikhil", "5th class", 100)// Nikhil 5th class 


// Pass by value and pass by reference

/* Primitives are passed by value (numbers, boolean)*/

function sum (a, b){
return a+b;
}
let resultSum = sum(1, 2) // pass by value 

let math ={
    marks: 100,
    grade: "A"
}

let science ={
    marks: 80,
    grade: "B"
}
function sum (obj1, obj2){
// let marksObj1 = obj1.marks;
// let marksObj2 = obj2.marks;
obj1.marks = 1;
obj2.marks = 2;
//console.log(marksObj1, marksObj2) // 100, 80
console.log(obj1.marks, obj2.marks, "obj marks")// 1, 2
}
sum(math, science)
//console.log(math.marks, science.marks)// 100, 80
console.log(math.marks, science.marks, "subject marks")//1, 2

// -------DEEP CLONE AND SHALLOW CLONE 

let math1 ={
    marks: 100,
    grade: "A"
}
let mathClone = {...math1} // this spread operator will copy all the properties of math1 in mathClone

let science1 ={
    marks: 80,
    grade: "B"
}
let scienceClone = {...science1}//this spread operator will copy all the properties of science1 in scienceClone
function sum (obj1, obj2){
obj1.marks = 1;
obj2.marks = 2;

console.log(obj1.marks, obj2.marks, "obj marks")// 1, 2
}
sum(mathClone, scienceClone)

console.log(math1.marks, science1.marks, "subject marks")//100, 80




