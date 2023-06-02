//create a navbar and change the color of its first element to red
document.getElementsByTagName("nav")[0].firstElementChild.style.color= "red";

// create an element with 3 children. NOw change the color of first and last element to green;
document.getElementsByTagName("nav")[0].firstElementChild.style.color= "green";
document.getElementsByTagName("nav")[0].lastElementChild.style.color= "green";

// write a javascript code to change the background color of all li tag to cyan.
Array.from(document.getElementsByTagName("li")).forEach((element)=>{
    element.style.background = "cyan";
})