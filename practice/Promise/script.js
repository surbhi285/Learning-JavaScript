// using Promise over callbacks because 
// 1-> Callback Hell or we can say pyramid of callback is doom
//2-> Order of execution of inner callbacks is confusing (out of normal human recognizable patter)

// eg of order of execution
/*  function googlecall('onboarding mail', (work)=>{
   console.log(1);
   //1 work...
   
   function googleGetReplies('replies', (playWithReplies)=>{
      //2. replies
      console.log(3)
   })
   console.log(2);
   gooogleGetReplies();
})

order is 1 3 2 but it should be 1 2 3
*/

/*Promise represents future value which right now you donot Know 
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

// ----------PROMISING CHAIN-----------

console.log("hello")
fetch('https://api.kanye.rest/')
.then(response => { 
// so this then block return promise of data due to response.json otherwise it will return promise of undefined
// response handler
   return response.json()
}).then (data =>{// if in this then block we are not return anything then next then block will return undefined
   // data handler
   console.log("data handler0", data)// so it will give data
   // if we return anything in it it will be return in next then block
   return "1 output";
}).then(data =>{ 
   // number1 handler
console.log("data handler1", data) // it will return undefined if we are not returing in previous then block
// as if we are returning "1 output" in previous then block then it will be return in this block -> 1 output
}).then(data =>{
   //num2 handler
}).then (data=>{
   //num3 handler
})
.catch(error =>{ // if we put error handle here then all the mistake we do in above block will be catch at end
   console.log("error")
}).finally(()=>{ //this handler occur when all then and catch block is handled then final block
   console.log("finally block") // this final handle will not fetch data
})

console.log("bye")

// if we put finally at first means before then and catch so if api is right then only finally and then block run
// and if api is wrong then finally and catch block will run

//------------Error Handling ------

console.log("hello")
fetch('https://api.kanye.rest/')
.then(response => { 
// response handler
   throw Error("Error created by Surbhi")
   return response.json()
})//.catch(error=>{ // this catch block handle error of fetch and then block of response
//    console.log("error level 2") 
// })
.then (data =>{
   // data handler
   console.log("data handler0", data)
   return "1 output";  
}).catch(error=>{ 
// if we put catch block here then it will handle error of fetch and both then block of response and if there 
// is error then  response handler and data handler will not console out
   console.log("error level 2") 
})
.then(data =>{ 
   // number1 handler
console.log("data handler1", data) 
}).then(data =>{
   //num2 handler
}).then (data=>{
   //num3 handler
})
.catch(error =>{ // if we put error handle here then all the error we do in above block will be catch at end
   console.log("error")
})

console.log("bye")

// if we put catch in down then it will be handling all the then block error 
// we can create multiple catch block

// if error of boundaries are unhandled  then 

window.addEventListener("unhandledrejection", ()=>{
   console.log("global error handler")
})



