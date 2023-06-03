/*Question -> Use Javascript to create a game of snake, water and gun. The game should ask you to enter S, W and G.
The computer should be able to randomly generate S, W and G and declare win and loss using alert. */

alert("Welcome to the Snake Water Gun Game");
var a = prompt("Enter your option { s:snake , w:water , g:gun }:")
const g = ['s','w','g']
var ran = Math.floor(Math.random()*g.length);
const curr = g[ran];

alert("computer chose  "+curr);


if((a=='s' && curr=='w') || (a=='w' && curr=='g') || (a=='g' && curr=='s')){
    alert("You Win")
}
else if(a==curr){
    alert("Draw")
}
else{
    alert("You Lose")
}

