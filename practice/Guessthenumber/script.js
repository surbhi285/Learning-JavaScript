/* Write the javascript program to generate a random number and store it in a variable.
The program then takes an input from the user to tell them whether the guess was correct , greater or 
lesser than the original number. The program is expected to terminate once the number is guessed. the 
number should be between 1-100. */

let randomNumber = Math.floor(Math.round()*101);
console.log(randomNumber)
let chances=0;
let input;
while(input !=randomNumber){
    input = Number.parseInt(prompt("Enter a number between 0 to 100"));
    if(input !=random ){
        console.log("Wrong! Try again")
    } if(random>input){
        console.log("The Number is bigger than "+input)
    } else if (random<input){
        console.log("The Number is smaller than "+input)
    }

    chances+=1;
}
console.log("Congrats")
console.log(`you scored ${100-chances}points`)