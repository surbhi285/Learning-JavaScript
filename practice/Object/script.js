let obj ={
    name : "nikhil", // Here name id key and nikhil is value
    rollno: 20,
    class: "9th", 
}

// ----TO GET
/* 1-> way*/ console.log(obj.name) // nikhil
/* 2-> way*/ console.log(obj["rollno"])//20

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
 console.log(object1)//{name: 'akash', parentsName: 'parent1'}

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
const userCopy = {...user} // spread operator 
console.log(userCopy); 
// user and userCopy is not equal because both address is different 

