let obj ={
    name : "nikhil", // Here name id key and nikhil is value
    rollno: 20,
    class: "9th", 
}

// ----TO GET
/* 1-> way*/ //console.log(obj.name) // nikhil
/* 2-> way*/// console.log(obj["rollno"])//20

// ---TO ADD
obj ["newProperty"] = 12;
console.log(obj)//{name: 'nikhil', rollno: 20, class: '9th', newProperty: 12}

// -----ADD DYNAMIC KEY AND VALUE
// Values are already dynamic
 let name1 = "akash";
 let key = "parentsName";

 let object1 ={
    name: name1, // -> by this we create values dynamic
    [key]: "parent1", //-> by this we create keys dynamic
 }
 //console.log(object1)//{name: 'akash', parentsName: 'parent1'}

// -----TO DELETE PROPERTY 
delete obj.rollNumber // 
//it will delete in first console .log so it is doing works such js start parsing first console .log takes time 
// till then js will come to that delete line and then at execution it will delete

// ----COPY
const user ={
    name: "user1",
    age: 24
}
 // this is not how we have to copy
const userCopy1 = user;

// ---shallow copy
// const userCopy = {...user} // spread operator 
// console.log(userCopy); 

// user and userCopy is not equal because both address is different but user and userCopy1 is same

// ----- value of the key would be the latest one

const obj1 = {
    name : "utkarsh",
    class: 9,
    rollNumber: 10,

    name : "akash"
}
console.log(obj1) // name would be akash not utkarsh

//----------Object Destructuring 
/* The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values 
from arrays, or properties from objects, into distinct variables */ 

const objDes = {
    firstName: "surbhi",
    rollNumber: 28,
    choiceOfAirways : "AirIndia"
}

console.log(objDes.choiceOfAirways) // non-destructuring 

//const {rollNumber, choiceOfAirways} = objDes // which part of object I need that is destructuring 
// so above line is as good as 
// const rollNumber = obj.rollNumber;
// const choiceOfAirways=obj.choiceOfAirways;
//console.log(rollNumber, choiceOfAirways, "destructured")


// ----- Destructuring ALIAS 
// A property can be unpacked from an object and assigned to a 
//variable with a different name than the object property.
 const{rollNumber: rollCall, choiceOfAirways} = objDes // here calling rollnumber by rollcall

 // it is something like -> const rollCall = objDes.rollNumber;
 console.log(rollCall, choiceOfAirways, "alias")


// ------------------OBJECT METHODS----

// 1-> Object.assign() -> static method that copies all enumerable own properties from one or more source
// object to target object.

let sourceobj = {name:"surbhi", className : 9}
let sourceobj1 = {name:"shivali", className:10}

let targetobj ={}

//Object.assign(targetobj, sourceobj)

// we can assign more than one sourceobj in targetobj
Object.assign(targetobj, sourceobj, sourceobj1);

//console.log(targetobj) // by this we have sourceobj properties in targetobj

//2-> Object.create() -> static methods that creates a new onj, using an existing object as the prototype
// of newly created object.

// there are two ways two create obj

//a-> create object{}
// here name and rollNo these are properties but there are own properties
//(own properties means properties direct in object not in the prototype)
const person = {
    name :"jenice",
    rollNo : 1
}

//b-> Object.create
// in this name and roll no. properties is created but in prototype 
// that means these prperties are not own properties 

const newPerson  = Object.create(person)

// console.log("person", person) // in this properties are shown 
// console.log("newperson", newPerson) // in this properties of person are shown in newPerson but in prototype

// console.log(person.name, newPerson.name) // jenice, jenice


// 3-> Object.getOwnPropertyNames()
// static method return an array of all properties found directly in a given object.

const personOwnProperty = Object.getOwnPropertyNames(person);
const newPersonOwnProperty = Object.getOwnPropertyNames(newPerson);
// console.log("personOwnProperty", personOwnProperty) // ['name', 'rollNo'] ->because it has own properties
// console.log("personOwnProperty", newPersonOwnProperty)//[] ->because it donot have own properties

// 4-> Object.keys()
//static method returns an array of a given objects own enumerable string-keyed property names.

const keyPerson = Object.keys(person)
const keyNewPerson = Object.keys(newPerson)
// console.log(keyPerson, "keyPerson");// ['name', 'rollNo'] -> we get keys of own properties 
// console.log(keyNewPerson, "keyNewPerson"); // {} -> this is how we get keys who doesnot have own properties

// 5-> Object.values()
// static method returns an array of a given objects own enumerable string-valued property names.

const valuePerson = Object.values(person)
const valuenewPerson = Object.values(newPerson)
// console.log(valuePerson, "valuePerson");// ['jenice', '1'] -> we get values of own properties 
// console.log(valuenewPerson, "valuenewPerson");// []

// 6-> Object.entries()
//static method returns an array of given object's enumerable string-keyed property key-value pairs

const entryPerson = Object.entries(person);
//console.log("entryPerson", entryPerson) // entryPerson (2) [Array(2), Array(2)]

// for(const [key, value] of entryPerson){
//     console.log(`${key} : ${value}`); // name : jenice  rollNo : 1
// }

for(const arr of entryPerson){
//console.log(`${arr[0]} : ${arr[1]}`); // name : jenice  rollNo : 1
 }


// ----Property Descriptors....

// 1-> Enumerable ---

let objt ={
    name: "surbhi",
    rollno: 24,
    address: "road"
}

// enumurable -> it is basically a state of property if u have key in for in loop then 
//that property is enemurable to add one property 
Object.defineProperty(objt, "cash",{
    value: 100,
    enumerable: true
})

for(const key in objt){
console.log(key)
}
// as we are doing enumerable true do when we do "for in loop" then key will be 
// name, rollno, address, cash  but if we do enumerable false and then we for in loop then key will be 
// name, rollno, address only there will be no cash because we give enumerable false

console.log(objt.propertyIsEnumerable("name"), "is name Enumerable") // true
console.log(objt.propertyIsEnumerable("rollno"), "is rollno Enumerable")// true
console.log(objt.propertyIsEnumerable("address"), "is address Enumerable")// true


// 2-> Writable
// writable basically means the value can be changed

let objt1 ={
    name: "surbhi",
    rollno: 24,
    address: "road"
}

Object.defineProperty(objt, "cash",{
    value: 100,
    writable : true,
    enumerable: true
})
console.log(objt1, "obj3")
console.log(objt1.cash) // 100
obj3.cash = 99;
console.log(objt1.cash) // 99

// so when writable is true we are able to edit the cash value from 100 to 99 
//but if writable is false then we are not able to edit .

//you cant again define the property which u already defined because inside defineProperty the property is checked


// 3-> Configurable
// properties of an object can be modified, deleted and new propert added

const objt2 ={
    name: "utkarsh",
}

Object.defineProperty(obj4,"class",{
    value: "9th class",
    enumerable: true,
    configurable: true,
})

delete obj4.class
console.log(obj4, "obj4") 
// if configurable is true then we are able to delete the property otherwise not



// 4-> ----------- Own Property --
// ownProperty is the property of an object which is directy in the object and not in the prototype
class Car {
    canMove

    func(){
        console.log("car audi");
    }
}

const carObj = {
    canMove: true,
    func: function(){ 
    console.log("carObj", carObj);
    }
}
console.log(carObj);

const descriptors1 = Object.getOwnPropertyDescriptor(carObj, "canMove") // it will give the property of canMove
const descriptors2 = Object.getOwnPropertyDescriptor(carObj,"func")// it will give the property of func
console.log(descriptors1, "descriptors canMove");
console.log(descriptors2, "descriptors func");


/*  
 few derivative () property of object...  */

 // Object.seal -> you cant delete the exisiting properties and you cant add new properties

 const objt4 = {
    property1: 42
 }

 Object.seal(objt4);
 console.log(Object.getOwnPropertyDescriptor(objt4, "property"))

 delete objt4.property1;

 // adding new property 
 objt4.abcd ="adaasaasa"
 console.log(objt4);

 // --------Object.freeze
 // It prevents the modification in existing property and cannot add new property

 const objt5 = {
   property1: 42,
 }
 Object.freeze(objt5)

 objt5.abcd ="asdadasdad"

 objt5.property1 =99;
 console.log(objt5) // it will give property1: 42 -> it will neither changing value to 99 nor adding new property abcd
 // so in this case configurable and writable is false 

 /* Date and Time object ....... */

 // to get a date 

 const rightNow = new Date()
 console.log(rightNow) // Sat June 03 2023 22:15:15 GMT +0530(India standard time)

 // to get date 
 console.log(rightNow.getDate(), "date")
// to get time
 console.log(rightNow.getTime(), "time") // time in milliseconds from 1970 jan 1
// to get day 
 console.log(rightNow.getDay(), "day")
// to get year
 console.log(rightNow.getFullYear(), "year")

 // SET  -> we can set date, day, year, time, minutes and seconds
 // WE CAN SET OUR OWN DATE 
 rightNow.setDate(15)
 console.log(rightNow)// 15 

 // to set year 
 rightNow.setFullYear(2099)
 console.log(rightNow)


 // to convert ist time to utc
const rightNowDate = new Date() 

console.log(rightNowDate.toUTCString(), "utc time") //-> by this we can convert ist time to utc time


// -------------MATH

let date = new Date();

let dateAddedTime = new Date()
// added 5 min
dateAddedTime.setTime(data.getTime()+300000)
console.log(dateAddedTime, date) //it will give time 5 minutes earlier
console.log(dateAddedTime-date) 

