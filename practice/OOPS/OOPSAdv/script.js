// class Car{
//     model = "v"; 
//     speed;  // model and speed are properties of car

//     constructor (speed, model){
//         this.model=model;
//         this.speed = speed;
//     }
//     canIDrive(){  // this is how u can give a method 
//         console.log("Yes I can drive")
//     }
// }

// const audi = new Car("123", "v8")
// console.log(audi); // in console it give model: v8 and speed: 123

// // if we use constructor then this will take object values 


// // ------Constructor function--------
// // class was introduced in 2015 so before ES6 constructor functions are used

// function CarConstructor(sp, md) {
//     this.sp = sp;
//     this.md = md;
//     this.canIDrive = function(){
//         console.log("Yes i can drive")
//     }
// } 
// const hyundai = new CarConstructor(200, "prime")
// console.log(hyundai); // in consol -> sp: 200 md: prime f: canIDrive()

/*so the difference between class and constructor function is if we write method in class it will
not appear in console but in prototype it will be there by this it save time and memory
 and if we write method in constructor it will appear in console only so it will take more time and memory*/

 /* so why classes is impoptant 
  what basically classes are doing -> they taking their method and putting inside the prototype so that 
  every object of that class can utilise that method without taking extra space
  */

  // ----------INHERITANCE ----------
  class Car{
    wheels;
    fuelTank

    constructor(){
        this.wheels=4;
        this.fuelTank="petrol"
        this.modelNo = "Basic 1"
    }

    canIDrive(){
        console.log("I can drive")
    }
  }

  class BMWcar extends Car{//so what extends is doing it inherits all properties and method from this car class
    sportsMode;
    Airbags;

    constructor(sportsMode, Airbags){
        super() // super refers to the person parent() it will inherit parent constructor
      this.sportsMode = sportsMode;
      this.Airbags = Airbags;
    }
    canIDriveBMW(){
        console.log("no i cant")
    }
  }

  const BMWClassC = new BMWcar("LEVEL 3", 4) 
  console.log(BMWClassC);

  BMWClassC.canIDrive();
  BMWClassC.canIDriveBMW();


  /* 
        GETTERS AND SETTERS...
By getters and setters u can create a real private property
so basically in old i.e ES5 use to describe private property by using "#" before property but its not effective
  */

        // const _radius = new WeakMap() // creating property outside
         
        // class Circle{

        //     constructor(radius) {
        //         _radius.set(this, radius)
        //     }
        //     get radius(){
        //         return _radius.get(this)
        //     }

        //     set radius(value){
        //         _radius.set(this, value)
        //     }
        // }

        // const circle = new Circle(10);
        // console.log(circle);

        // console.log(circle.radius, "radius")

        //  circle.radius = 1000;
        //  console.log(circle.radius, "radius")


/* 
--------------------INSTANCE VS STATIC 
static method is part of class 
*/
class Circle {

    radius;

    constructor(radius){
        this.radius = radius;
    }
 // this belongs to the instance 
    draw(){
        console.log("Draw")
    }
 // this belongs to class
    static parse(){
        console.log("hello world")
    }

}
// meaning of instance -> this cir is instance of class circle
const cir = new Circle(1);
console.log(cir);// -> Circle {radius: 1}

cir.draw() // Draw
Circle.parse() // hello world


/* -----METHOD OVERRIDING........ */
class Student{
    name;

    constructor(name){
        this.name = name;
    }

    markAttendance(){
        console.log("simple marking the attendance for", this.name)
    }
}
class Teamcaptain extends Student{
    badge;

    constructor(name, badge){
        super(name)
        this.badge=badge;
    }
    // AS VARUN IS TEAMCAPTAIN SO WE WILL MARK ATTENDANCE IN DIFFERENT WAY NOT LIKE NORMAL ABOVE ONE
    // if we make any spelling mistake in below markattendance function for eg (markAttendance1)
    //then it will take normal above one and return  simple marking the attendance for varum

markAttendance(){
    console.log("captain is marking the attendance", this.name)
}
    playFootball(){
       console.log("CAN PLAY FOOTBALL");
    }
}
const SportsCaptain = new Teamcaptain("varun", 12);
console.log(SportsCaptain) //Teamcaptain {name: 'varun', badge: 12}
SportsCaptain.playFootball();// CAN PLAY FOOTBALL
SportsCaptain.markAttendance();// captain is marking the attendance varun



/// so in class we can inherit by use of "EXTENDS"

/// so before when we dont have classes then by constructor function we create inheritance

function ShapeConstructor(color){
    this.color=color;
}
ShapeConstructor.prototype.move=function(){
    console.log("Move") // by this we create move function inside prototype
}

function CircleConstructor(radius, color){
    ShapeConstructor.call(this.color)   // mocks the calling of super keyword
    this.radius = radius;
}

//1-> by doing this we are setting the inheritance
// this is to set the parent prototype and  we set shapeconstructor prototype
CircleConstructor.prototype =Object.create(ShapeConstructor.prototype)

// to add constructor
CircleConstructorClass.prototype.constructor = CircleConstructor

//2-> we add the methods of the circle
CircleConstructor.prototype.draw = function(){
    console.log("Draw");
}

const circleConstObj = new CircleConstructor(1000, "pink")
console.log(circleConstObj);


// COMPOSITION 

// SO basically preference is given to composition instead of inheritance

// class Person{
//     name
// }

// class Eat{

// }

// class run{

// }

// class Swim{

// }

// class Person extends Eat, run, Swim{

//}
//1. multiple inheritance is not supported
//2. All the properties all the methods would go inside the Person class 
//which makes the object of person class heavy

//--------lets see MIXIN in below eg

const canSwim={
    sim: function(){
        console.log("swim")
    }
}
const canEat={
    walk:function(){
        console.log("eat")
    },
    funnyWalk: false,
}

const canWalk ={
    walk:function(){
    console.log("walk");
}
}

// constructor function
function Person(){
    this.name="ram"
}
const ram = new Person()
console.log(ram, "ram person")
Object.assign(Person.prototype, canWalk, canEat, canSwim) // here person is target obj and canwalk and caneat is source

ram.walk();
ram.eat();

// so mixin can do multiple inheritance
