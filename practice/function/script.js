/// ----First-class function
/* when function are treated like any other variable. Function can be passed as an argument to other function
, can be returned by another function and can be assigned as a value to a variable. 

1. */

// Assigning function to a variable
const foo =() =>{ // assigning anonymous function in variable
    console.log("foobar")
}
foo(); // using variable to invoke the function by adding the parenthesis() at the end

// // passing function as an argument

function say(){
    return hello;
}
function greeting(hellomsg, name){
    console.log(hellomsg()+name);
}
greeting(say, "john")// here passing say() function as an argument to greeting() function
// hello, john!

//-- the function that we pass as an argument to another funtion is called callback function, say()is callBack

//------CALLBACK FUNCTION-----
/* A callback function is a function passed into another function as an argument, which is then invoked 
inside the outer function to complete some kind of routine or action. */

function logging(callBackFunc){
    console.log('logging')
    callBackFunc(1,2)
}
function add(a, b){
    console.log(a+b)
    return a+b;
}
logging(add) // here add means pass the value of add (i.e 3). for the excution we go for add();
// output of above code is logging and 3 so requirement of above code is ->need to log and then you need to add
//so here we are saying that logging function first u do your action and after that u execute add function.



// not only passed the function as an argument but u can also return the funtion



// function------>
//1. function declaration 
function sum(){

}

// 2. function Expression ->

const sum = function(a, b){
    return a+b;
}
let result = sum(1, 2);
console.log(result); // 3

// Difference between sum() vs sum

/* when we write "const sum =fun()" then sum donot contain the whole function it only contains the address of 
function in heap where it stored and when we write "sum()" so it means go to the function in heap and 
execute it */

// for eg
const abc = function(){
    console.log("hey there")
}
// if we ask for abc -> 
/*f() {
    console.log("hey there")
}  -> means its giving ans*/

// if we ask for abc() ->
//hey there -> and it giving output after excution


// ---named Function
function abc(){

}

 // ---anonymus function
const sum1 = function(){

}

// -----ARROW FUNCTION---
/* in this function we dont need to use function keyword but we need what type of argument this function need */

const sumArrow =(a,b) =>{ // a, b are arguments
return a+b;
}
let resultArrow = sumArrow(1, 2);
console.log(resultArrow, "sumArrow");

 
//--------------------HIGHER ORDER FUNCTION----------------
//the function which can return a function is higher order function
// the function which can accept a function as an argument or return for eg function logging which we take in callBack func