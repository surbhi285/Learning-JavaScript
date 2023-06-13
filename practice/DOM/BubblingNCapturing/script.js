const grandParent = document.getElementById("grandparents");
const parent = document.getElementById("parents");
const child = document.getElementById("child");

console.dir(grandParent);
console.dir(parent);
console.dir(child);


// ---------Capturing Phase ----------//
/*Listen when event goes up 
true -> capturing phase*/

grandParent.addEventListener("click",()=>{
    console.log("grandParent clicked")
}, true)

parent.addEventListener("click", ()=>{
    console.log("parent clicked")
}, true)

child.addEventListener("click", ()=>{
    console.log("child clicked")
}, true)

//----------Bubbling Phase----------//
/* Listen when event goes down. 
false -> bubbling phase*/

grandParent.addEventListener("click",()=>{
    console.log("grandParent clicked")
}, false)

parent.addEventListener("click", ()=>{
    console.log("parent clicked")
}, false)

child.addEventListener("click", ()=>{
    console.log("child clicked")
}, false)

// event.preventDefault -> it basically save the event to do the default nature.
 //eg-> blocking default click handling -> Toggling the checkbox is the default action of clicking on a checkbox
// this eg. demonstrates how to prevent that from happening.
// const checkbox = document.querySelector("#id-checkbox");
// checkbox.addEventListener("click", checkboxClick, false); // here false indicates that event should handle in bubbling phase

function checkboxClick(event){
    let warn = "preventDefault() wont let you check this!";
    document.getElementById("output-box").innerHTML +=warn;
    event.preventDefault();
}

//------HOW TO STOP THE EVENT -> event.stopPropagation();
// it stop the event at that point ony it will not go up and down and it will be destroyed by garbage collector

grandParent.addEventListener("click",(event)=>{
        console.log("grandParent clicked")
       // event.stopPropagation(); // event will stop here only it will not move forward neither it will go down
    }, true)
    
    
    parent.addEventListener("click", ()=>{
        console.log("parent clicked")
    }, true)
    
    child.addEventListener("click", ()=>{
        console.log("child clicked")
    }, true)


    // addEventListener is basically adding an object in the memory
    // the more you add this listener the more memory it is going to take


    //----------REMOVAL OF LISTENER-----------

   const button = document.getElementById("button");

   button.addEventListener('click', buttonClickHandler)

   function buttonClickHandler(event){
    console.log("click me")
   }
   
   setTimeout(()=>{
    button.removeEventListener("click", buttonClickHandler) 
   }, 5000) //execute code after 5 seconds means after 5 sec it will remove the eventHandler

   // we use unload when we want to remove eventlistener as soon as we go away from the page
   document.addEventListener("unload",()=>{
    button.removeEventListener("click", buttonClickHandler)
   })

   




