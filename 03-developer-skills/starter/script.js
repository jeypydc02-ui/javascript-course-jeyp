// Remember, we're gonna use strict mode in all scripts now!
'use strict';
// function first() {
//     ScriptProcessorNode();
// }
// function second () {
//     console.log('I am the second function');
// }

// first();

// function alpha() {
//     console.log('Alpha:start');
//     Beta();
//     console.log('Alpha:end');

//     function Beta() {
//         console.log('Beta');
//     }
    
// }
// alpha();

// console.log(varX);
// console.log(letX);
// console.log(constX);




var varX = 1;
let letX = 2;
const constX = 3;

function addDecl(a, b) {
    return a + b;
}
console.log(addDecl(2, 3));

const addExpr = function (a, b) {
    return a + b;
};
console.log(addExpr(2, 3));
const addArrow = (a, b) => a + b;
