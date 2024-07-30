//loops and strings
for (let count = 1; count <=5; count++){
    console.log("Apna college");
}

let sum = 0;
for(let i=1; i<=5; i++){
sum = sum+1;
}
console.log("sum=",sum);
console.log("loop has ended"); 

//while loop
let i = 1;
while(i<=5){
    console.log("krupa");
    i++;
}

/* do while loop
 let i = 20;
 do{
console.log("krupa kakkad");
i++; 
}while(i<=10);*/

//game
let gameNum = 25;
let userNum = prompt("Guess the game number:");

while(userNum != gameNum){
    userNum = prompt("you entered wronge number, guess again:");

}
console.log ("congratulations , you entered the right number");

