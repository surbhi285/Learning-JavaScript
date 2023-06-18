/*Prmoise represents future value which right now you donot Know 
but is assured that will get the value in future

Pending has 3 stages
1-> Pending -> initial stage , neither fufilled nor rejected
2-> Fulfilled -> means that operation is completed succesfully
3-> Rejected -> means operation failed*/

// fetch Api calls the server ....

console.log("hello")

const promise = fetch('https://api.kanye.rest/') 
// when u give the fetch u immediately get promise object but ans you may get after some time
console.log(promise)

console.log("bye")

// so console of above code is like -> hello
//                                     Promise {<Pending>}
//                                     bye

// so after getting the response after that I want to do something with response for this we use "then"

console.log("hello")

const promise1 = fetch('https://api.kanye.rest/')
                 .then(response => console.log(response))
// so here after getting ans then i want to console response 
console.log(promise1)

console.log("bye")
// so outout will be like -> hello
//  Promise {<pending>}
// bye
// Response {type: 'cors', url: 'https://api.kanye.rest/', redirected: false, status: 200, ok: true, …}
// this response contain all the information regarding ans 

///---- if we want to get the data out of this response we use response.json
 
console.log("hello")

const promise2 = fetch('https://api.kanye.rest/')
                 .then(response => {
                    return response.json()
                 })
                .then (data => console.log(data))
console.log(promise2)
console.log("bye")
// output is -> hello
//Promise {<pending>}
//bye
//{quote: 'Everything you do in life stems from either fear or love'}


/* Question : take the quote and push it inside the body */
console.log("hello")

const promise3 = fetch('https://api.kanye.rest/')
                 .then(response => {
                    console.log(response.status)// 200 -> 200 status means that the request has succeded.
                    return response.json()
                 })
                .then (data => {
                // operation start from here 
                const quote = data.quote;
               // 1-> Create an element 
               const h1Element = document.createElement('h1');
                //2-> edit the element
                h1Element.innerText = quote;
                //3-> Push the element inside the DOM tree
                document.body.appendChild(h1Element)

                console.log(data, "real data")
                })
console.log(promise3)
console.log("bye")

// suppose we dont get the data we get the error for that case we use
//.catch to handle the error 


console.log("hello")

const promise4 = fetch('https://api.kanye.rest12/')
                 .then(response => {
                    //console.log(response.status)// 200 -> 200 status means that the request has succeded.
                    return response.json()
                 })
                .then (data => { 
                console.log(data, "real data")
                }).catch(error =>{
                    console.log("Error is here")
                    console.log(error)
                })
                console.log(promise4)
                console.log("bye")
// as we give wrong url so it will give the error  -> so output will be
// hello
// Promise {<pending>}
// bye
// Error is here
// TypeError: Failed to fetch at script.js:85:17