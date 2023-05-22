//Questions
//1-> Use logical operators to find whether the age of a person lies between 10 and 20
let age = 8;
if(age>10 && age<20){
    console.log("your age lies between 10 and 20");
}
else{
    console.log("Your age doesn't lies between 10 and 20");
}
//2-> use switch case with any eg.
const action ="say_hello";
switch(action){
    case "say_hello":{
        const message = "hello";
        console.log(message);
        break;
    }
    case "say_hi":{ 
        const message ="hii"
        console.log(message);
        break;
    }
    default: {
        console.log("Empty action recieved")
    }
} 
//3-> Write a javascript program to find whether number is divisible by 2 and 3
let num = 34;
if(num%2==0 && num%3==0){
    console.log("YES")
}
else{
    console.log("NO")
}
//4-> Print "You can drive" or"not" based on age  by ternary operator
let age1 = 20;
let a = age1>18 ? "You can drive" : "you cannot drive"
console.log(a);
