/* 1 genero un numero random
   2 il computer genera un numero random 
   3 stabilisco il numero più alto con if 
   4 dichiaro il vincitore
*/


let userRandom = Math.floor(Math.random() * 6) + 1;
console.log(userRandom);

let computerRandom = Math.floor(Math.random() * 6) + 1;
console.log(computerRandom);

if (userRandom > computerRandom) {
    console.log('You Win');
} else if ( computerRandom > userRandom) {
    console.log('You Lose');
} else {
    console.log('Even');
}