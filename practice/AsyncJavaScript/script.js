// SETTIME OUT 
// It wait for x seconds then it execute function (callBack function)

console.log("hello")

setTimeout(()=>{
    console.log("surbhi")
}, 5000)

console.log(bye)
/*so output in console is like "hello" and "bye" print continously and then after 5 seconds "surbhi" will  print 
because settimeout function first go to webApi memory in there , there is timer or stopwatch when time 
completes then only function will execute till then executor executes other console*/


console.log("a")

setTimeout(()=>{
    console.log("c")
},0)

console.log("b")
/* no matter we set time 0 the function will send to Api memory and till then executor excutes other console as
javascript wait for none */

console.log("a")

setTimeout(()=>{
    console.log("c")
},4000)

console.log("b")
console.log("d")
console.log("e")
console.log("f")
console.log("g")
console.log("h")
console.log("i")
console.log("j")
console.log("k")

/* so here a b d e f g h i will print continously then c will print -> so when in api memory c time completes
 then it will sync to macrotask queue and here event loop plays a role by first asking task wuese do have 
 you something if yes then it ask stack are u empty and if it is also yes then it take value from 
 task queue and put it in stack and then it will come to console */

 // settimeout talks about guaranteed minimum time before this time  function cant be executed 
 // but max time depends on main thread basically means when stack is empty.

 // -------------MUTLTIPLE SETTIME OUT 

 console.log("start")

 setTimeout(()=>{
    console.log("b")
 },4000)

 setTimeout(()=>{
    console.log("c")
 },8000)

 console.log("end")

 /* executor print start then send both settime out function to Api memory and then print end 
 so in Api when first settime out time completes then it send it to taskqueue where event loop send it to 
 stack and then it is print in mean time when second timeout functions completes it will move to taskqueue
 and event loop send it to stack and then it is printed*/

 /* ----EVENT LOOP ALGO 
 This algo of event loops basically rums again n again
 
 1-> to ask if task queue has anything 
 a) IF NO -> do nothing
 b) IF YES -> Ask question to stack if it is empty 
             i) IF NO -> Do nothing
             ii) IF YES -> 
                    o) Pop the first task from macro-task queue 
                    oo) Put the task inside the stack
        
 */
  

//------------Set Interval---------
console.log("initial commit")

let setTimeoutId = setTimeout(()=>{
    console.log("hey there");
}, 3000)

clearTimeout(setTimeoutId);
console.log(setTimeoutId, "setTimeOut")
const setIntervalId = setInterval(()=>{ // it will execute the function after every 3 sec
    console.log("....repeat")
}, 3000)
clearInterval(setIntervalId);

console.log(setIntervalId, "set Intervsl Id")

// so as this set interval go on n on after every 3 sec so we can stop this by setInterval id by using 
//it browser give a number as setIntervalId and we write clearInterval(setIntervalId whatever browser give);

//we can also unsubscribe timeout by using setTimeOutId and then clearTimeOut(setTimeOutId)

