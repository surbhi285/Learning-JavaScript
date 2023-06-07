const headingElement = document.getElementById("heading");
console.log("--------element-----");
console.dir(headingElement); 
//here it gives h1 and subtype of h1 because defer is downloading 
//script file parallel to dom tree creation and execute after the dom tree creation
