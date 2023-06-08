/* -------SELECTORS-------------*/

// 1-> getElementsByTagName -> Give HTMLCollection (Array Like thing)
// let paragraphTags = document.getElementsByTagName("p");
// console.log(paragraphTags);

// 2-> getElementsById -> gives single element
// let paraId = document.getElementById("paragraph");
// console.log(paraId.style.color="red");

// 3-> getElementsByClass -> Give HTMLCollection (Array Like thing)

// let container = document.getElementsByClassName("class1");
// console.log(container);

// 4-> querySelector -> it takes the css selector
let cssQuerySelect = document.querySelector("#paragraph") // we write #paragraph because this is how we write id in css

//5-> querySelectorAll -> removes all the elements inside an element matching the given css selector

/* -------------UPDATION ----------*/

// 1.innerHTML  // 2.textContent   // 3.innerTEXT

//-----> innerHTML
// this innerHTML is security threat as the script tag can be used and js can access cookies
let card = document.getElementById("card");

console.dir(card);

//card.innerHTML = "hey i am changed"
//card.innerHTML = "<h1>Hey i am innerHTML</h1>"

// this innerHTML is security threat as the script tag can be used and js can access cookies


//------> innerText
// All formatting (new line, tab) will be saved except space. for space in string literal -> \u00a0

card.innerText = "<h1>heys its inner text</h1>"

// -----> textContent----
// all formatting will be lost 

//----style--
card.style.color="red"


/*----------ADDITION IN DOM --------*/
//1. create an element
const liElement = document.createElement("li");
console.log("liElement new", liElement);

//2. Edit the element
liElement.innerText = "surbhi"

//3. Attach the new Element to the unordered list
const unorderedList = document.getElementById("names")

//4. Adding  things in the last
//----way 1 -> append
unorderedList.append(liElement);

//-----way 2-> innerHTML
unorderedList.innerHTML = unorderedList.innerHTML+"<li>Surbhi</li>"
