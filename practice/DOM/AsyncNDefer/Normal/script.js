const headingElement = document.getElementById("heading");
console.log("--------element-----");
console.dir(headingElement); 
// heading Element gives null because dom tree is not created first javscript file is executed
// then Dom tree is cretead. This is scenario of Normal.