//POLLYFILLS

// so in array we have seen that in its prototype there is function called map which is in built
//bt we can create our own map 

/* 1-> Go to every element 
            1.1-> call the callback function
            1.2-> Whatever result you got from the call you need to save that
*/

Array.prototype.myMap = function(callback){
    // let arr = [1, 2, 3, 4, 5] // if we use these elements then result will be {1, 2, 3, 4, 5}

    let arr = this;
    const result=[];// this collects the returned value from callback function
     
     for(let item of arr){
         const returnVal = callback(item)
         result.push(returnVal)
     }
     return result
}

const res =[123, 123, 123].myMap((item, index)=>{ // <- this is implicit binding
    return{
        value:item,
    }
})
console.log(res);

// to get the index with value 

Array.prototype.mymap = function(callback){
    let arr=this;
    const result =[];

    for(let index=0; index<arr.length; index++){
        const item = arr[index];
        const returnVal = callback(item, index)
        result.push(returnVal)
    }
    return result;
}

const callback = (item, index) =>{
    return{
        index,
        value: item,
    }
}
const res1 = [123, 124, 125].mymap(callback)
console.log(res1, "my map");

//----------->Filter

// normal filter
const callbackfunction = (item, index) =>{
    return item >5;
    }
const resultFilter = [1,2,3,4,5,6,7].filter(callbackfunction)
console.log(resultFilter, "filter");

//-----> to create own filter

Array.prototype.myFilter = function(callback){
    let arr = [1, 2, 3, 4, 5, 6, 7];
    let resultArr =[];

    for(let i=0; i<arr.length; i++){
        const item = arr[i];
        const res = callback(item, i);
        if(res){
            resultArr.push(item);
        }
    }
    return resultArr;
}
const resultMyFilter = [1,2,3,4,5,6,7].myFilter(callbackfunction)
console.log(resultMyFilter, "my filter")


//------------> Reduce
// normal reduce

const resultReduce = [1,2,3,4,5,6].reduce((accumulator, currentVal)=>{
    return accumulator + currentVal
}, 12)
console.log(resultReduce, "reduce");

Array.prototype.myReduce = function(callback, initialValue){
    let array = this;

    const accumulator = initialValue ? initialValue:0;
    for(let index =0; index<array.length; index++){
        const item = array[index];
        accumulator =callback(accumulator, item)
    }
    return accumulator;
}

const resultMyReduce = [1,2,3,4,5,6].reduce((accumulator, currentVal)=>{
    return accumulator+currentVal
}, 12)

console.log(resultMyReduce, "my Reduce")