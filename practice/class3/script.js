// Questions
//Question 1 -> Write a program to print the marks of a student in an object using for loop.

let marks = {
      Surbhi : 89,
      Ruchir : 91,
      Shivali : 87,
      Heena : 45
}
for(let i=0; i<Object.keys(marks).length; i++){
console.log(Object.keys(marks)[i]+marks[Object.keys(marks)[i]])
}

// // Question 2 -> Write a program to print the marks of a student in an object using for in loop.
let mark = {
    Surbhi : 89,
    Ruchir : 91,
    Shivali : 87,
    Heena : 45
}
for(let key in marks){
    console.log(key + marks[key])
}
// Question 3-> Write a program to print "try again" until the user enters the correct answer.
let cn =43;
let i 
while(i !=cn){
    console.log("Try again")
    i=prompt("Enter your Number")
}
console.log("You have choose corrected number")
//Question 4-> Write a function to find mean of 5 numbers
const mean = (a, b, c, d)=>{
return (a+b+c+d)/4
}
console.log(mean(4, 5, 6, 7));
 


