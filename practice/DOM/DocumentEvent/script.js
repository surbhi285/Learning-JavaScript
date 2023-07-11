// 1->------------DOM content Loaded-----------
/* so basically its a event which occur only after the whole DOM TREE is created.
Just like click, hover this is also type of event 
In this we dont need to write defer or async and not need to write script tag just before body closing tag  */

document.addEventListener('DOMContentLoaded',()=>{
    console.log("------inside-------")
    const containerDiv = document.getElementById("container");

    console.dir(containerDiv);
})

console.log("------outside--------")

const containerDiv = document.getElementById("container");
console.log(containerDiv);

//2-> -----------LoadEvent--------------
/* when external resources are fully loaded (Images, CSS, script etc) so it is basically for the resources */

document.addEventListener("load", ()=>{
    
})


// 3-> -----------beforeunload-----------
/* This event is called when user is moving from one page to another
a) this event is used for cleaning purpose , cancel all eventlistener
b) saving the form if accidental reload..*/

document.addEventListener("beforeUnload", ()=>{

})


