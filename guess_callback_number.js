// Угадай число на callback

let n = Math.floor(Math.random() * 1000);
const readline = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout
})
let counter = 0;
function input( ) {
    counter++;
    console.log(`attempt number ${counter}`);
    readline.question(`type a number between 0 and 999 \n >>>  ` , (num) => {
    console.log(`your number is ${num}  `);
    if (isNaN(num + 1)) {
        console.log(`not a number`);
        input();          
    } else if (num > n) {  
        console.log(`reduce the number`);
        input();
    } else if (num < n) {
        console.log(`increase the number`);
        input();
    } else {
        console.log(`You guessed right on the try ${counter}!`);
        readline.close();
    }
})}; 

input();

