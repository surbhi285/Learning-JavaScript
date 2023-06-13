// ----CLOSURE -> function + its lexical environment
// closure is default in javaScript and it take more memory
// Basic Example
function abc(){
    // local environment
    var c =14;
    console.log(a);//->12 
    console.log(c);//->14
    // so when in function parsing is done and in excetion value of "a" is not there then fuction execution context 
    //will go to global execution context to find "a" and this is how it will chain up with global execution
}
var a=12;//global
abc();




// A function can return a function
let a = 10; //-> global variable

function foo(){
    let b =20; //-> foo variable
    let abcd =100; // it will not be include in closure because in bar we are not using abcd so in parsing only
    // it will decide which one is sing in bar or not , if we use abcd in bar function then it can be included
    //in closure;

    function bar(){
        let c=30;  //-> local variable
        return a+b+c;
    }
    return bar;
}
const result = foo();
console.log(result); // -> result will be bar function -> f bar(){let c=30 return a+b+c;}

const resultFinal = result();
console.log(resultFinal); // -> 60 
// in above code bar function outer environment is foo function whose outer enviornment is global


// Example
function foo(){
    let var1 = 10;
    function bar(){
        var1 = var1+1;
        console.log("value of var 1 debug", var1) // now var1 is not in lexical environment, its in closure
    }
    return bar;
}

let resultofExample = foo();
resultofExample(); //11
resultofExample();//12