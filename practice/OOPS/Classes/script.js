"use strict"
//class can have -> 1) Methods
                //  2) Properties
                //  3) constructor
// class Car{
//     model = "v"; 
//     speed;  // model and speed are properties of car

//     constructor (speed, model){
//         this.model=model;
//         this.speed = speed;

//     }
//     canIDrive(){  // this is how u can give a method 
//         console.log("Yes I can drive")
//         // if we want to write with what speed 
//         console.log("yes I can drive with speed", this.speed)
//     }
// }

// // to create object of name audii

// const audi = new Car("123", "v8")
// console.log(audi);

// console.log(audi.speed);//undefined ->as we have not given any value in class propertie speed//123 after constructor
// console.log(audi.model);// v  // v8 -> after constructor
// console.log(audi.canIDrive()); // Yes I can drive

// // if we use constructor then this will take object values 


// // ------Constructor function--------
// // class was introduced in 2015 so before ES6 constructor functions are used

// function CarConstructor(sp, md) {
//     this.sp = sp;
//     this.md = md;
//     this.canIDrive = function(){
//         console.log("Yes i can drive")
//         // here we want to write i can drive with speed then
//         console.log("I can drive with speed", this.sp)
//     }
// } 

// const hyundai = new CarConstructor(200, "prime")
// console.log(hyundai);

// console.log(hyundai.md, hyundai.sp);
// hyundai.canIDrive();

// function CircleRadius(radius, location){
//     this.radius = radius;
//     this.location= location;
//     this.draw = function(){
//         console.log("location x ",this.location.x, "location y", this.location.y)
//     }
// }
// const circle = new CircleRadius(10, {x:50, y:200});
// console.log(circle);
// circle.draw();


// -------------CONCEPT OF THIS----------------
// this keyword is nothing but context.

// first understand the callsite of foo function
// function foo(){
//     console.log("foo")
// }
// function bar(){
//     console.log("bar");
//     foo(); // this is callsite for foo 

//     foo;
// }
// bar(); // here also bar is defined from global and also called from global


// 4 rules to determine the context (means "this")

/*   RULE-1 ->  DEFAULT BINDING   
In js callsite will determine that what will be the context of function   */

// function foo(){
//     console.log(this.abc); // it will return undefined -> it is as good as saying window.abc
//     console.log(this)
// }
// foo(); // here foo call site is global so it will return according to global

/* RULE-2 -> IMPLICIT BINDING()
here js will determine the context
*/

// function foo(){
//     console.log(this);
// }
// var obj ={
//      name:"surbhi",
//      rollNumber: 28,
//      func : function(){
//         console.log(this.name, this.rollNumber) // surbhi 28 
//      }
// }

// obj.func();

// NOTE -> no matter of chaining of object, context would be the last object for this see eg below

// let obj3 ={
//     name: "obj3",
//     sum: function(a, b){
//         console.log(a+b);
//         console.log(this);// obj3
//     }
// }
// let obj2 = {
//     name:"obj2",
//     obj3: obj3
// }
// let obj1 = {
//     name:"obj1",
//     obj2: obj2
// }

// obj1.obj2.obj3.sum(1, 2)


// pitfalls of implicit binding

let obj = {
    name: "utkarsh",
    sum: function(a,b){
        console.log("hello sum", a, b)
    }
}
obj.sum(1, 2) // hello sum(1, 2) // this is call site

const sumCopy = obj.sum

sumCopy(1, 3); // hello sum(1, 3)// this is call site

/* RULE-3 -> EXPLICIT BINDING()
user needs to tell javascript what is the context 

3 things of explicit binding -> call, apply and bind -> these three are used to set the contxt of the function
*/

// var obj ={
//     a: 1,
//     food: foo,
// }
// // way 1 -> to call a function
// function abc(a, b){
//     console.log(this)
//     console.log("asdasda", a, b); // asdasda 10 20
//     console.log("answer of a", this.a)
// }

// //abc(1, 2);  // call site of abc is global

// abc.call(obj, 10, 20)
// // output will be
// // asdasda 1 2
// // {a: 1, food: ƒ}
// // asdasda 10 20

// apply 

// function foo(a,b){
//     this.a = a;
//     this.b=b;
// }
// var obj1 = {
// a:1,
// foo: foo
// }
// var obj2 ={};

// obj.foo.call(obj2, 1, 2) // ->call site -> {a:1, b:2}

// obj.foo.apply(obj2, [2,4]) // ->call site -> {a:2, a:4}

// console.log(obj2)

/// bind

function foo(a,b){
    this.a = a;
    this.b=b;
}
const obj1 = {
    foo: foo
}
const fooCopy = obj1.foo.bind(obj1, 12, 25)
console.log(obj1, "obj1")// -> {foo:f} 'obj1'

fooCopy()// callsite-> no implicit, no explicit, no new || here we have default binding 

console.log(obj1, "obj1") // {a:12, b:25, foo:f}'obj1'


// /* RULE 4 -> NEW KEYWORD() 
//  new keywords creates a blank object;
//  So basically new means -> {}
//  */
//  function CarConstructor(sp, md) {
//         this.sp = sp;
//         this.md = md;
//         this.canIDrive = function(){
//             console.log("Yes i can drive")
//         }
//     } 
    
//     const hyundai = new CarConstructor(200, "prime")
//     console.log(hyundai);
    
    // foo(); -> Normal call
    // obj.foo()-> call with some information
    // obj.foo.call(contact, name) -> call with some instructions

/* RULES PRECEDENCE -> if two or more rules fight then who will win */

// new > Explicit > implicit > default

// function foo(str){
//     this.a = str;
// }

// var obj1 ={
//     foo: foo
// }

// var obj2 ={
//     name: "obj2"
// }
//-------->Implicit vs Explicit
//  obj1.foo.call(obj2, "implicit vs explicit") // foo will have context of obj2
//  obj1.foo.call(null, "implicit vs explicit") // foo will have context of window obj
//  // if we use "use strict"
//  'use strict'
//  obj1.foo.call(null, "implicit vs explicit") // foo will have context of null
//  console.log(obj1) 
//  console.log(obj2)


// -----------> new keyword VS Implicit
// let car = new obj1.foo("new implicit")

// console.log(car) // undefined 
// console.log(obj1) //{a: new implicit  foo f:foo}

