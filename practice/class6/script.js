// Questions//
//1-> Write a program using prompt function to take input from the user of age as value
//from the user and use alert to tell him if he can drive or not
let age = prompt("Enter your age")
age = Number.parseInt(age)
const canDrive1 =(age)=>{
    return age>=18?true:false
}
if(canDrive1(age)){
    alert("You can drive")
} 
else{
    alert("You can not drive")
}
//2-> In Q1 ask user if he wants to see the prompt again  and  use console error to log 
//the error if the age entered is negative.
let runAgain= true;
const canDrive =(age)=>{
    return age>=18?true:false
}
while(runAgain){
    let age = prompt("Enter your age");
    age = Number.parseInt(age);
    if(age<0){
        console.error("its an error");
        break;
    }

    if(canDrive(age)){
        alert("you can drive")
    }
    else{
        alert("you cannot drive")
    }
    runAgain = confirm("You wanna try again?")
}

// 3-> Write a program to change the url to google.com if user enters a number greater than 4

let number = prompt("Enter a number");
number = Number.parseInt(number);
if(number>4){
    location.href = "https://google.com"
}

// 4-> change the background of the page to yellow, red or any other color based on user input through prompt
let color = prompt("Enter the color")
document.body.style.background = color