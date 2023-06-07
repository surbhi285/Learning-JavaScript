const headingElement = document.getElementById("heading");
console.log("--------element-----");
console.dir(headingElement); 
/*here it gives h1 and subtype of h1 because  async is downloading script file parallel to 
dom tree creation and after downloading it excecute right there 
and then remaining dom tree creates */ 
