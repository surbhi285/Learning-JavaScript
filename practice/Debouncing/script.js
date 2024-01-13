// ============= DEBOUNCE METHOD ================


let counter = 0;
const getData = ()=>{
    console.log("fetching Data...", counter++); 
}
 
//in above code whatever we are writing in input its calling the function again n again 
//suppose I write "surbhi" so it called the function six times; so to improve it we need debouncing 

const debouncing = function(fn , d){ 
// it takes two parameter function and delay which we want here function is getData and time delay is 300s
    let timer;
    return function(){
        let context = this;
        args = arguments;
// the use of context and args ensures that the original function is called with correct context and args
        clearTimeout(timer); // it is to clear the settimeput if key is pressed again 
        timer = setTimeout(()=>{  // here we are creating settimeout to call a function after sometime
            fn.apply(context, args); // here using apply ensures that the context and arguments properly passed in original function 
        }, d)
    }

}
const betterFunction = debouncing(getData, 300); // now by this method function is only called after delaytime
