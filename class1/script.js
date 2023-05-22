//1-> create a variable of type string and try to add a number to it.
let a = "Surbhi"
let b = 28;
console.log(a+b);

//2 -> Use type of operators to find the datatype of string in question 1
console.log(typeof(a+b)) // to determine the datatype use type of operator

//3-> Create  a const object in javascript. Can you change it to hold a number later?
const item = {
    name : "Harry",
    section: 1,
}
// item ="Harry" // so answer of this question is no we cant change it to hold a number later

//4-> Try to add a new key to the const object in Problem 3 were we able to do that?
// Ans is yes 
item['frnd']="Surbi"
console.log(item);

// 5-> Write a JS program to create  a word-meaning dictionary of 5 words.

const words ={
    success : "the fact you achieved something you want",
    Hardwork: "great deal of efforts",
    consistency : "steadiness",
    perseverance :"Continue effort to do",
}
console.log(words)