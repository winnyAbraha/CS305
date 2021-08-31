// HOMEWORK Week 1 ,Day 1
  // Number 1 

const prompt = require("prompt-sync")();

let person = confirm('are you sales man')

if(person){
    let sale = +prompt('enter')
    if(sale <300){
        console.log("no commision");
    }else if(sale >=300 && sale <=500){
        console.log('1% commisin');
    }else if(sale > 500){
        console.log('2% commisin');
    }
}else{
    console.log('2% for sales between 300 and 500');
}
//Number 2


let age = +prompt ("How old are you: ");
while (age <= 18){
    
  age = +prompt ("How old are you: ");
}


let age;
do {
    age = +prompt ("How old are you: ");
  } while (age <= 18);
  
// Number 3

let initial= +prompt("how much is your savings");
let interstrate = +prompt ("what is the interstrate ");
let numyears = +prompt("how many years need to calculate");

for ( let i = 1; i <= numyears * 12; i++){
    initial += (initial * (interstrate/100)) 
}
console.log(initial);

//Number 4

for(let i = 1; i <= 5; i++){
    let row = "";
    for(let j = 1; j <= 5; j++){
        row += j + " ";
          }     
           console.log(row)
 }
    


 for(let i = 1; i <= 5; i++){
        let row = "";
        for(let j = 1; j <= i; j++){
            row += i + " ";
              }     
               console.log(row)
}
        

for(let i = 5; i >= 1; i--){
        let row = "";
        for(let j = 1; j <= i; j++){
            row += i + " ";
            }     
            console.log(row)
    }
        
 // Number 5

let cost = +prompt("Enter cost");

if( cost < 50_000){
    console.log(5/100 * cost)
}else if (cost >= 50_000 && cost < 100_000){
    console.log(1000 + (10/100) * (cost - 50_000));
} else if (cost >= 100_000 && cost < 200_000){
    console.log(2000 + (15/100) * (cost - 100_000))
}else {
    console.log(5000 +( 10/100) * (cost - 200_000))
}


//Number 6


let Int = +prompt(" Enter int");
let sum = 0;
let num = int ;
while(num>0){
    sum += num %10;
    
    num = Math.floor(Int/10);
}
console.log(sum);