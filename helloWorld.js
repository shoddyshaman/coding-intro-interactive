console.log("Hello, Universe");

const firstName = "Dj";

let age = 32;

const isCool = true;

let height;

// console.log(typeof firstName)
// console.log(typeof age)
// console.log(typeof isCool)
// console.log(typeof height)

let x = 4;
let y = 10;
let z = 7 + 9;
let sum = x + y + z;
sum = x + y - z;

let diff = x + y - (y + z);
console.log(sum);

// let string = 'Hello, Universe'

// let welcomeString = string + " " + firstName //concatenate

//use backticks
let welcomeString = `Hello, Universe ${firstName}`; //template literal. template string

console.log(welcomeString);


if(age >= 21){
    console.log(`you can drink ${firstName}`)
} else {
    console.log('youve got some growing up to do')
}

let score = 78
let passing = 40
score = 40

// if(score > passing){
//     console.log('u passed')
// } 
if(score !== passing){
    console.log('just passed')
} else {
    // score = score + 5
    score += 5
    console.log(score)
    console.log('try again')
}


