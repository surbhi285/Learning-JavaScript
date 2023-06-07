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

//5-> querySelectorAll -> 