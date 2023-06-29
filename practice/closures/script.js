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
const result = foo(); //if write const result=foo;  then it will return foo function
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

//ex
var a = 10
function foo(){
    console.log(a) // 10 
}

function bar() {
    var a = 20
    foo() 
}

bar()

//ex2
var a = 10
function bar() {
  var a = 20
  function foo(){
    console.log(a) //20 because bar islexical environment of foo function
  }
  foo()
}
bar()

//ex3

function bar() {
  function foo(){
    console.log(a) // undefined -> because foo function excute before the excution of var a
  }
  foo()
  var a = 10
}
bar()


//ex4
function outerFunc() {
    let a = 10;
  
    function innerFunc() {
      console.log(a); // 10
    }
    return innerFunc;
  }
  
  let innerFunc = outerFunc();
  innerFunc();

  //ex
  let i = 0 
  function increase(){
  i++
  console.log(`courrent counter is ${i}`)
  return i
}

increase()//0
increase()//1
increase()//2

//ex

let increase = (function(){
    let i = 0
    return function(){
      i++
      console.log(`courrent counter is ${i}`)
      return i 
    }
  })()// -> this function is called immediately invoked function
  

  increase() //1
  increase() //2
  increase()//3