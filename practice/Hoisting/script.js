//---------------Hoisting-----------//
/* variable and functions declaration are hoisted. hoisted means it will treat function and variable as 
if they are on the top of the file 
Only declaration is hoisted not the assignment thats why it give undefined
Var are hoisted but in different way from let and const
let and const are hoisted in TEMPORAL DEADZONE*/

var a = 12;
console.log(a); //-> 12

console.log(a);
var a =12; // -> undefined-> because it wil automatically treat var a at top from console.log. so it give undefined

sum(); // ->inside the sum function-> if we call sum() above the function then also it will give same output
function sum (){
console.log("inside the sum function")
}
sum(); // ->inside the sum function

//----- In case of let ----

let a = 12; 
console.log(a); //-> 12

console.log(a) // it give error i.e cannot access 'a' before initialisation -
let a = 12;

// ----In case of const ---

const name ="surbhi"
console.log(name); // surbhi

console.log(name1); // it give error
const name1 = "surbhi"
