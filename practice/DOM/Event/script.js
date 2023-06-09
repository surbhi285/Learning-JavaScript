//1-> Select

const container = document.getElementById("container");

container.addEventListener("click", (event)=>{
    console.log("------event object------")
    console.dir(event)

    // to change the color of the "click me" after clicking it 
    const buttonContainer = event.target // -> basically it is point out the html container
    console.dir(buttonContainer)

    buttonContainer.style.color = "red"
});

// ---------> Resize event----
/* it fires when the document view (window) has been resized */

window.addEventListener("resize",(event)=>{ // its working on window only
    console.log("resized")
})





