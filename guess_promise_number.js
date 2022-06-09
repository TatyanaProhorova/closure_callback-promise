// Угадай число на promise

let n = Math.floor(Math.random() * 1000);
const readline = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout
})

function question (quest) {
    return new Promise((resolve, reject) => {   
        readline.question(quest, (num) => {    
            resolve(data);                      
        })
    })    
}

let counter = 0;
function guess() {
    counter++;
    console.log(`attempt number ${counter}`);
    readline.question(`type a number between 0 and 999 \n >>>  ` , (num) => {
    console.log(`your number is ${num}  `);
    if (isNaN(num + 1)) {
        console.log(`not a number`);
        guess();          
    } else if (num > n) {  
        console.log(`reduce the number`);
        guess();
    } else if (num < n) {
        console.log(`increase the number`);
        guess();
    } else {
        console.log(`You guessed right on the try ${counter}!`);
        readline.close();
    }
    })
}; 

guess();


