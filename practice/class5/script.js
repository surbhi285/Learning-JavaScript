//Questions
//1-> Create an array of numbers and add numbers to this array
let arr = [2, 4, 1, 7, 5];
let a = 28;
arr.push(a);
console.log(arr);

//2->filter for number divisible by 10 from given array.
let arr2= [10,5,24,30,59,40];
let ans = arr2.filter((element)=>{
    if(element%10==0){
        return element
    }
})
console.log(ans);

//3-> create an array of square of given numbers.
let arr3=[2,8,4,6,10,12];
const ele = arr3.map((value)=>{
        
        return value*value;
})
console.log(ele);

//4-> Use reduce to calculate factorial of a given number from an array of first n natural numbers.
let arr4 =[1,2,3,4,5]
let n = arr4.reduce((x1, x2)=>{
    return x1*x2
})
console.log(n)