// // JavaScript Fundamentals - Part 1
// // We'll write our code here!

// // // // JavaScript Fundamentals - Part 1
// // // // We'll write our code here!
 
// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log(js);
 
// console.log("=== VARIABLE ===");
 
// let firstName ="Jeyp";
// console.log(firstName);
 
// let age = 21;
// console.log(age);
// age = 22;
// console.log(age);
 
// const birthYear = 2004;
// console.log(birthYear);
 
// const PI   = 3.1415;
// console.log(PI);
 
// var job = "programmer";
//  job = "teacher";
// console.log(job);
 
// const country = "Philippines";
// const language = "Filipino";
 
// age = 25;
// age = 30;

// //let firstName
// let myCurrentJob
 
// console.log(" === DATA TYPES ===");
 
// // Number
// let id = 2023103213;
// console.log(id);
// console.log(typeof id);
 
// // String
// let lastName = "Dela Cruz";
// console.log(lastName);
// console.log(typeof lastName);
 
// // Boolean
// let isJavaScriptFun = true;
// console.log(isJavaScriptFun);
// console.log(typeof isJavaScriptFun);
 
// // Undefined
// let year;
// console.log(year);
// console.log(typeof year);
 
// let dynamicVariable = 40;
// console.log(dynamicVariable, typeof dynamicVariable);
 
// dynamicVariable = "Is now String";
// console.log(dynamicVariable, typeof dynamicVariable);
 
// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);



// PART 2
// //Basic Operators - Math Operators
 

 
 
const firstName = "Dwayne";
const lastName = "Johnson";
const job = " WWE Pro wrestler";
const birthYear = 1972;
const year = 2025;
 
const dwayne = "I'm " + firstName + " " + lastName + ", a " + job + ". I was born in " + birthYear + ", and I'm currently " + (year - birthYear) + " years old.";
console.log(dwayne);
 
 
const dwayneNew = `I'm ${firstName} ${lastName}, a ${job}. I was born in ${birthYear}, and I'm currently ${year - birthYear} years old.`;  
console.log(dwayneNew);
 
const dwayneNew2 = `I'm ${firstName} ${lastName}, a ${job}. I was born in ${birthYear}, and I'm currently ${year - birthYear} years old.`;
console.log(dwayneNew2);
 
console.log(`I'm ${2025 - 1972} years old.`);
console.log( `Math works here: ${2 + 3} equals five`);
 
// IF-ELSE STATEMENTS
console.log("=== IF-ELSE STATEMENTS ===");
 
const age = 20;
 
if (age >= 60) {
    console.log("You are an Senior Citizen.");
 
} else if(age >= 18) {
    console.log("You are an Adult.");
} else if (age >= 13) {
    console.log("You are a Teenager.");
} else {
    console.log("You are a Child.");
}
 
 
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Dwayne"));
console.log(Boolean({}));
console.log(Boolean(""));
 
////////////////////////////////////
// Coding Challenge #1 - BMI Calculator
 
const massJPDC = 78;
const heightJPDC = 1.69;
const massJOHN = 92;
const heightJOHN = 1.95;

const   BMIJPDC = massJPDC / (heightJPDC ** 2);
const   BMIJOHN = massJOHN / (heightJOHN * heightJOHN);
console.log(BMIJPDC, BMIJOHN);


if(BMIJPDC > BMIJOHN) {
    console.log(`Jpdc's BMI (${BMIJPDC.toFixed(2)}) is higher than John's (${BMIJOHN.toFixed(2)})!`);
} else {
    console.log(`John's BMI (${BMIJOHN.toFixed(2)}) is higher than Jpdc's (${BMIJPDC.toFixed(2)})!`);
}   















// Test Data 1
const massJpdc = 78;    
const heightJpdc = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
 
// Your code here:
// 1. Calculate BMIs
// 2. Create markHigherBMI variable
// 3. Log results to console
 
 
if(massJpdc >= 40) {
    console.log("Jpdc is overweight.");
} else if (massJpdc>= 35){
    console.log("Jpdc is Obsesity Class II");
} else if(massJpdc >= 30) {
    console.log("Jpdc is Obesity Class I");
} else if(massJpdc >= 25) {
    console.log("Jpdc is Overweight.");
} else if(massJpdc >= 18.5) {
    console.log("Jpdc is Normal weight.");
} else {
    console.log("Jpdc is Underweight.");
}
 
if(massJohn >= 40) {
    console.log("John is overweight.");
} else if (massJohn >= 35){
    console.log("John is Obsesity Class II");
} else if(massJohn >= 30) {
    console.log("John is Obesity Class I");
} else if(massJohn >= 25) {
    console.log("John is Overweight.");
} else if(massJohn >= 18.5) {
    console.log("John is Normal weight.");
} else {
    console.log("John is Underweight.");
}
 
const bmiJpdc = massJpdc / (heightJpdc ** 2);
const bmiJohn = massJohn / (heightJohn ** 2);
 
console.log(`Jpdc's BMI: ${bmiJpdc.toFixed(2)}`);
console.log(`John's BMI: ${bmiJohn.toFixed(2)}`);
