//Async Await

// Await -> It looks like that it made js executor to wait till lines complete.
// function which is using async keyword only there await is used
// async function returns a promise
// Await is syntetical sugar so where we are using await there we are using ".then" behind the scene

// normal function vs async function

// normal function
function abc(){
    return 1;
}
const abcResult = abc();
console.log(abcResult, "abcresult"); // 1 'abcresult'

// Async function
// async function fun(){
//     //await fetch("asbdhdb")
//     return 1;
// }
// const funResult = fun();
// console.log(funResult, "funresult") // Promise 'funresult' -> it is returning promise object

// // and to get the data from this promise object
// const funPromise = fun();
// funPromise.then((data)=>{ // by this we can consume data from the promise
//     console.log(data, "data") // 1 -> here it give data 
// })
// console.log(funPromise, "funpromise") // Promise 'funresult' -> it is returning promise object


/* ----- Implement Kanyes quotes async await---- */

// async function fetchQuotes(){
//     console.log("initial")
//     const response = await fetch("https://api.kanye.rest/")
//     console.log(response);
//     console.log("after fetching")   
// }
// fetchQuotes();

// output will be like 
// initial
// Response {type: 'cors', url: 'https://api.kanye.rest/', redirected: false, status: 200, ok: true, …}
// after fetching

// --- to get real data
async function fetchQuotes(){
    const response = await fetch("https://api.kanye.rest/")
    const data = await response.json() // to get the dat    a 
    console.log(data);
    const{quote} = data;//it is written by destructuring -> it is as good as const quotes = data.quote
    console.log(quote)
    addToDom(quote)
}

function addToDom(quote){ // to add the quote in the dom
const h1Element = document.createElement('h1'); // create h1 tag
h1Element.innerText = quote; // put text of quote in innerText
document.body.appendChild(h1Element) // add h1 in body of document
}

fetchQuotes()
// output is 
// {quote: 'The world needs more Joy... this idea is super fresh'} 
// The world needs more Joy... this idea is super fresh
// and this quote is added to the DOM

