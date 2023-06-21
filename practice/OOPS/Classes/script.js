//class can have -> 1) Methods
                //  2) Properties
                //  3) constructor
class Car{
    model = "v"; 
    speed;  // model and speed are properties of car

    constructor (speed, model){
        this.model=model;
        this.speed = speed;

    }
    canIDrive(){  // this is how u can give a method 
        console.log("Yes I can drive")
    }
}

// to create object of name audii

const audi = new Car("123", "v8")
console.log(audi);

console.log(audi.speed);//undefined ->as we have not given any value in class propertie speed//123 after constructor
console.log(audi.model);// v  // v8 -> after constructor
console.log(audi.canIDrive()); // Yes I can drive

// if we use constructor then this will take object values 


// ------Constructor function--------
// class was introduced in 2015 so before ES6 constructor functions are used
