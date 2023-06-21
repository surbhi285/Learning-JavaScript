// there are six static method

//1-> Promise.all -> It takes an array of promises , in this if any of promise fail 
//then all the promise will fail

// all the promise need to get resolved then only i will go to then block

let payerPromise = new Promise ((res, rej)=>{
    res(95)
})

let shopkeeperPromise = new Promise((res, rej)=>{
res(1000+5)
})

Promise. all ([
    payerPromise,
    shopkeeperPromise
]).then((data)=>{
    // rbi take the ledger
    console.log("RBI take the ledger", data)
}).catch(error =>{
    console.log("rollback the transaction")
});
// output wil be -> RBI take the ledger (2) [95, 1005]

// 2 -> Promise.race
// It will wait till the first promise is settled and then it will be resolved 

let promise1 = new Promise((res, rej)=>{
    setTimeout(()=>{
        res(1000);
    },5000)
})
let promise2 = newPromise((res, rej)=>{
    res(100)
})
promise1.then(data=>{
    console.log(data, "data after 5 sec")
})

promise2. then(data =>{
    console.log(data, "immediate")
})

Promise.race([
    promise1,
    promise2
]).then(data =>{
    console.log("data", data)
}).catch(error =>{
    console.log("error")
}) 
// output -> 100 -. so it give only that data which is faster other, datas will be rejected
// for race, we need to see all the promise should be ok if any of promise show error then it will give error

//3-> Promise.any 
// it will take the first promise that is resolved successfully, if any of promise will give ans it will
// be accepted then other will be rejected

const promise3 = new  Promise((res, rej)=>{
    res(100);
})
const promise4 = new Promise((res, rej)=>{
    rej("error")
})
const promise5 = new Promise((res, rej)=>{
    rej("error")
})

Promise.any([
    promise3,
    promise4,
    promise5,
]).the(data =>{
    console.log("data", data)
}).catch(error =>{
    console.log(error, "error")
})
//output->100 suppose if we have two resolved data in the same time then 1st promise in the order will be accepted

// RACE VS ANY
// in race all the promises needs to be fulfilled (not rejected) but in any , promises can be rejected

// 4->Promise.resolve
function callAserver (String){
    if(!string){
        return Promise.resolve("ASADASAD")
    }
    fetch(string).then (data =>{
        // beautiful things
    })
}
const res = callAserver()
res.then(data =>{
    console.log("callAserver", data)
})
// output -> callAserver ASADASAD

//5-> Promise.reject 

function callAserver1 (String){
    if(!String){
        return Promise.reject("Asdasdas")
    }
    fetch(string).then(data=>{
// beautiful things
    })
}
const ans = callAserver1()
if(ans){
    ans.catch(data =>{
        console.log(data)
    })
}
console.log("ans", ans)
