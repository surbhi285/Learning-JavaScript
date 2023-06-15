//........ARRAYS.....

let arr = [1,2,3,4,5,6]
let arr1= [1,2,3,4,5,6]

let isEqual = arr ===arr1
console.log(isEqual) //false

// 1-> Push -> add element to the last
let arr2 = arr1.push(9);
console.log(arr1);// this returns the whole array
console.log(arr2); // this returns the length of an array

// 2-> pop -> remove element from the last
console.log(arr1.pop()) // 9

// 3->silce-> slice out a piece from an array , it creates new array, requires starting index and ending index

const num =[1,2,3,4]
const newArray = num.slice(2) // [3,4] -> it will take all element from 2 index
console.log(newArray);
const newArray1 = num.slice(1,3)//[2,3]->from 1 index to 3 index so it will not take element of end index.
console.log(newArray1);

// 4-> splice ->splice is used to add new items to an array, it modifies the old array
const number = [1,2,3,4,5]
num.splice(2,3,8,14); // here 2 is an index, 3 is an element which we want to replace with 8, 14
console.log(num) // [1,2,8,14]

// 5-> Sort -. it will sort in same array by inplacing
let sortArr = [1,5,3,7,2,4,0];
let ans = sortArr.sort()
console.log(ans) // [0,1,2,3,4,5,7]

let orgArr = [1,2,5,6,11, 34, 25, 103]
// orgArr.sort();
// console.log(orgArr); // [1,103,11,2,25,34,5,6]
orgArr.sort((a, b)=>a-b)// it is called comparators. it sort in increasing order
console.log(orgArr); // [1,2,5,6,11,25,34,103]

orgArr.sort((a, b)=>b-a)// it is for decreasing order
console.log(orgArr); // [103, 34, 25, 11, 6, 5, 2, 1]

//6->shift -> remove the first element
let arr4  = [1,2,3,4]
arr4.shift()
console.log(arr4) //=>[2,3,4]
//7-> unshift -> add the element to the first
arr4.unshift(5)
console.log(arr4) // [5,2,3,4]


//---looping---
// for loop
let array = [1,2,3,4,5,6]
for(let i=0; i<arr.length; i++){
    console.log(arr[i]); // 1 2 3 4 5 6
}

// for of loop  -> it will print values
for(let item of array){
    console.log(item) // 1 2 3 4 5 6 
}

// for in loop  -> it will print keys
for(let item in array){
    console.log(item) //  0 1 2 3 4 5 -. it will print index
}


//-----------Arrays callbacks----

//---------------FOREACH----------

// forEach -> executes a provided function once for each array element
// foreach want one callBack function

let array1 = [1,2,3,4,5,6,7]
//1-> parent -> forEach
//2-> callBack -> ()={} // anonymous function

//forEach is going to every index
//forEach will executing this callBack function
// forEach has 3 parameters -> value, index, whole original array


array1.forEach((value, index, array)=>{ // need to pass one callBack function
console.log(value, index, arr, "hey i m traversing")
})
/*its output will be
1 0 [ 1, 2, 3, 4, 5, 6 ] hey i m traversing
2 1 [ 1, 2, 3, 4, 5, 6 ] hey i m traversing
3 2 [ 1, 2, 3, 4, 5, 6 ] hey i m traversing
4 3 [ 1, 2, 3, 4, 5, 6 ] hey i m traversing
5 4 [ 1, 2, 3, 4, 5, 6 ] hey i m traversing
6 5 [ 1, 2, 3, 4, 5, 6 ] hey i m traversing
7 6 [ 1, 2, 3, 4, 5, 6 ] hey i m traversing
so it is giving value with value it is giving index and each time it is giving an whole array*/
 
array1.forEach(()=>{
    console.log("Hello World") // it will print 7 times hello world ->7 times bcoz in arry1 there are 7 elements
})

// if we want only values then
array1.forEach((value)=>{
    console.log(value) // 1 2 3 4 5 6 7
})

// --- we can also write this in normal function for eg--

array1.forEach(surbhiFunction) // here foreach will go to every element and then execute my function

function surbhiFunction(value, index){ // here we are passing the function
    console.log(value, "at index: ", index)
}


//---------------MAP-------------
/* map creates a new modifies array from calling a function for every array element,it does not change the original array
it go to each element and execute the function
in this we can return (can return any value boolean, integer, string)and what my function is returning, 
collect them as we can see in obj eg -> [{age, rank} {age, rank}] -> modified array
it also has 3 parameter -> value, index, array*/

 let arrMap = [19, 20, 35, 47, 89];

 let modifiedArray = arrMap.map((value, index, arrMap)=>{
    console.log(value + " map at index of: ", index)

let rank =""
if(value<22){
    rank = 'undergrad'
} else if (value>=22 && value <30){
    rank = "passed out"
} else if(value >=30){
    rank = "experienced one"
}

let obj ={
    age: value,
    rank : rank,
}
return obj;
 })

console.log(arrMap);
console.log(modifiedArray);


//--------------Array.Filter-----
/* filter accepts only truthy and falsey return value 
// truthy and false is near to true and false respectively*/

let arrFilter = [19, 21, 20, 37, 44, 46];
// suppose we want to filter the element which is divisible by 2;

let filteredArr = arrFilter.filter((value)=>{
    if(value%2==0){
        return true;
    }else{
        return false;
    }
})
console.log(filteredArr); // 20, 44, 46

/* 1-> go to element -> suppose first it go to 19
2-> Execute the function 
3-> Filter will get the return value -> if filter get the value which is true then it will put the element in 
an array and if the filter get the value which is false it will not do anything */

// ------ARRAY.FIND-----
// when u need to find something 
// so if it able to find that element it give that element bt if it not able find that it give undefined

 let arrFind = [1,2,3,4,5,6,7,18,35,64,24]
 let result = arr.find((value)=>{
        if(value==99){
            return true;
        }
})
console.log(result) // undefined

// ------------FIND INDEX----
/* to find the index of given element */
//if element not found it give undefined 
// if there are muliple same element then it will give index of first element
// time complexity is -O(N)

let arrFindIndex = [1,2,3,4,5,6,7,18,35,64,24,99]
let result1 = arr.findIndex((value)=>{
    if(value==99){
        return true;
    }
})
console.log(result1)// 11

// --------ARRAY.REDUCE-------------
/* work of reduce is -> 1. to go to element 2-> call the function */

let ArrReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//accumulator is where the return value of  sum is stored for eg -> 1 and then reduce go to 2 
//then at accumultor 1 is saved then when reduce go to 3 then 3 i.e(1+2) is stored at accumulator
let ans1 = ArrReduce.reduce((accumulator, value)=>{ 
    return accumulator + value;

}, 0) // 0 is intial value of accumulator
console.log("accumulator", ans1) // 55
// if we dont provide initial value to reduce then in take first element of an array as initial value.//

//---question -> sum all the odd numbers

let OdddNumber = ArrReduce.reduce((accumulator, value)=>{
    if(value%2!=0){
        return accumulator+value;
    }else{
        return accumulator;
    }
}, 0)
console.log(OdddNumber);// 25

//-- question -> to double each element of an array for eg [1, 2, 4, 6]
// by map 
let givenArray = [1, 2, 3, 4, 5, 6]
let numAns = givenArray.map((value)=>{
return value*2;
})
console.log(numAns);

let result2 = givenArray.reduce((accum, value)=>{
    accum.push(value*2)
    return accum
}, [])// here inital value type is array
console.log(result2);


//-------------Copy of Array----------//

// way 1 -> FOR LOOP
let arrOrg = [1, 2, 3, 4, 5]
let arrCopy = [];

for(const item of arrOrg){
    arrCopy.push(item);
}
arrCopy.push(100);

console.log(arrOrg, "org Array")
console.log(arrCopy, "copy Array")


// way 2 -> MAP
 
let arrModified = arrOrg.map((value)=>{
    return value
})
arrModified.push(106);
console.log(arrOrg, "org Array")
console.log(arrModified, "Modified Array")

// way 3 ---SPREAD OPERATOR (...)

let arrNew =[...arrOrg] // spread original values in newArr
arrNew.push(108)
console.log(arrOrg, "org Array")
console.log(arrNew, "New Array")

