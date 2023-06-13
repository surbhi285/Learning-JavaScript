// method to change the color of block as required after clicking it 
// Naive way -> by having 3 different event listener
let red = document.getElementById("red");
red.addEventListener('click', ()=>{
red.style.background="red";
})

let green = document.getElementById("green");
green.addEventListener('click', ()=>{
    green.style.background="green"
})

let blue = document.getElementById("blue");
blue.addEventListener('click',()=>{
    blue.style.background="blue";
})

// 2 way -> -----EVENT DELEGATION -----
/*Instead of, adding an event listener to each and every similar element, we can add an event listener to a 
parent element and call an event on a particular target using the .target property of the event object.*/

// 1-> Select the parent

const parent = document.getElementById("parent");

parent.addEventListener("click", (event)=> {
    console.log("parent clicked");
    console.dir(event)

    const elementBox = event.target;
    const id = elementBox.id;
    elementBox.style.backgroundColor=id;
})