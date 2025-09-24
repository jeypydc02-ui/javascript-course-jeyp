 'use strict';

 
// console.log(varX);
// console.log(letX);
// console.log(constX);
 
// var varX = 1;
// let letX = 2;
// const constX = 3;
 
// function addDecl(a, b) {
//     return a + b;
// }
 
// const addExpr = function(a, b) {
//     return a + b;
// };
 
// const addArrow = (a, b) => a + b;

// const person = {
//     name: 'Lewis',
//     greet: function() {
//         console.log(`Hello, I am ${this.name}`);

//     },
// };

// person.greet();

// const anotherPerson = { name: 'Gyo'};
// // Borrow greet function
// anotherPerson.greet = person.greet;
// // Display or run the greet function for anotherPerson
// anotherPerson.greet();

// //Detached function
// const greetFunction = person.greet;

// // greetFunction(); // this is undefined
// greetFunction();

// const obj = {
//     name: 'Objects',
//     regularMethod: function() {
//         console.log('Regular Method:', this.name);
//     },
//     arrowMethod: () => {
//         console.log('Arrow Method:', this.name);
//     },
// };

// obj.regularMethod(); // 

// obj.arrowMethod(); //

// const timer = {
//     name: 'Timer',
//     start: function() {
//         console.log(`${this.name} starting...`);

//         const self = this; // Capture the context

//         setTimeout(function () {
//             console.log(`${self.name} finished`);
//         }, 1000);
//     },
//     startModern: function() {
//         console.log(`${this.name} starting modern...`);
//     startTimeout(() => {
//         console.log(`${this.name} finished modern`);
//     }, 1000);
//     },
// };
// timer.start();
// timer.startModern();


const functionTypes = {
    regularFunction: function() {
        console.log('Arguments length:', arguments.length);
        console.log('First argument:', argument[0]);    
},
    arrowFunction: () => {
        console.log(arguments);
        console.log('Arrow function called');
    },

    modernFunction: (...args) => {
        console.log('Args length', args.length);
        console.log('First arg:', args[0]);
    }
};

functionTypes.regularFunction('Hello', 'world');
 functionTypes.arrowFunction('test');
functionTypes.modernFunction('modern', 'approach');






