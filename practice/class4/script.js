//Questions regarding string and its methods
// 1-> what will following line will print in js
console.log("har\"".length)

//2-> To use inclue method in string
const sentence = `The quick brown fox jumps over the dog.`
const word = `fox`
console.log(`The words "${word}" ${sentence.includes(word)?'is':'is not'} in the sentence`);

//3-> To use startswith method in string
const line = "Saturday night plans"
console.log(line.startsWith('Sat'));

//4-> To use endswith method in string
const str = "Have a nice day"
console.log(str.endsWith("day"));

//5 -> Extract the amount out of this string
// "Please give Rs 1000"
let str1 = "Please give Rs 1000"
let amount=Number.parseInt(str1.slice("Please give Rs ".length))
console.log(typeof amount);

