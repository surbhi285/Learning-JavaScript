// creating own fetch

// 1 way -> By Promise constructor 
// const myFetch = new Promise((resolve, reject) => {

//     // 1-> calling the server
//     // const data = XMLhttpRequest() -> this is how real fetch call the server for the data

//     const data = {status: 200 , url: "adafdafd", // by this we are creating own data
//     data: {
//         name : "utkarsh",
//         address: "streets",
//         rollNumber: 40,
//     }}

//     //2-> judging the data..
//     if(data.status === 200){
//         //good
//         resolve(data)
//     } else if (data.status === 500) {
//         //error
//         reject({error: 500, message: "hey server is down"})
//     }
// });

// myFetch.then(data =>{
//     console.log("hey there data");
//     console.log(data);
// }).catch(error =>{
//     console.log(error, "hey error") // if status will be 500 then it will error and in consol hey error print due to catch block
// })

// fetch is doing two thing
// 1-> calling the server
//2-> judging the data
      //2.1 -> if data is good, OK, Not error , it give success means data
      // 2.2->if data is bad, Not OK, error , it give error

// Resolve -> promise wants to change the status of promise object (old status: Pending to fulfilled)

// Reject -> same thing with reject it just change the status from pending to rejected.

// 2 way -> To use Async Keyword
async function getTheQuotes(){
    return 1;
}
const result = getTheQuotes();
console.log(result, "promise obj") // output -> Promise {<fulfilled>: 1} 'promise obj'

// consoume a promise 
//1-> way 
result.then(data =>{
    console.log("my marks", data) // output -> my marks 1
})
// //2-> way -> but it works after creating module so as simple it will not work without module
// const result3 = await getTheQuotes();
// console.log(result3, "result 3")


