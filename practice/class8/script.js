//----Execution context-----
// var
// var has two scope -> global and functional
// var doesnt care about block.
// redeclaration is allowed in var

var a =12; // global
console.log(a); //12

if(true){
    var b =10; // child scope of global
    console.log(b);//10
    console.log(a); //12  -> if global scope has variable then child scope will automatically have it
}
console.log(b) //10

var a = 10;
console.log(a); //10
if(true){
    var b=20;
    var a =30;
    console.log (b);//20
    console.log(a);//30
}
console.log(a); //30

var a = 12; // global -> it will come in global execution
console.log(a); //12

function abc(){
    var a = 100;
    console.log(a)//100
}
abc();// it will create function execution 
console.log(a)//12

// let and const

// 1.let and const have a scope of {}
//2. let and const have block scope...
//3. in let we can reassign but in const we cant


let a =12; // global
console.log(a) //12

if(true){ // child scope of global
    let b =100;
    console.log(b);//100
    console.log(a);//12
}
console.log(b)// error


//...................TRY AND CATCH ...........

console.log("hello")
function sum(a, b){
    try{
    // do something 
    // this will throw error (refernce error due to non alignment)
    let c = a+b;
    return c;
    } catch (error) {
        console.log("hey there user how are you doing")
        console.log(error)
    }
    let result = sum(1, 2)
    console.log(result);    
}