const container  = document.getElementById("container");

container.style.background="red"
container.style.color ="white"
container.style.border="1px solid black"
container.style.width= "100px"
container.style.height = "20px"

container.addEventListener("click", (event) =>{ 
   console.log("i am clicked")
})
/* we want to listen the event but we cant listen each and every event we only listen the event which we 
want, for eg in above code we only want to listen when we click so we write "click".
after listening we want one thing that is callBack function
so what is basically want is we want to add eventlistener to container if someone clicks on container
excute the function which we are giving. We are giving this function to addeventListener. function
is exectued at one keyword i.e "event". */

container.addEventListener("mouseover", (event)=>{
    console.log("i am hover")
})


// -----> keyboard events
// ----> keyboard up



// ---> 2nd way to listen event
// function containerClick(){
//     console.log("containerClick") // by using html attribute -> npt used so not preferable
// }


