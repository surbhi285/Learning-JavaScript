// 1. Select the element

const element = document.getElementById("names");
 console.dir(element);
// after console.dir we check the properties of ul and we observe that we get html collections
//of li as children.

 const childrens = element.children; // by this we access children which is HTMLCOLLECTION

 // to convert html collection into an array
 const childrenArray =  Array.from(childrens);

 console.log(childrens); // html collection
 console.log(childrenArray); // array

 childrenArray.forEach(liElement =>{
    if(liElement.textContent ==="Vikas"){
        console.log('result is true')
    }
 })


 // -> change the last name ....
 childrenArray[childrenArray.length-1].textContent = "surbhi"

 


