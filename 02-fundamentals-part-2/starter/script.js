
console.log("Part 2: Functions is ready.");

//functions - declarations and Expressions
function logger() {
    console.log("My name is Jeyp");

}

logger();
logger();
logger();

function fruitProcessor(strawberries, oranges) {
    console.log(strawberries, oranges);
    const juice = `Juice with ${strawberries} strawberries and ${oranges} oranges.`;
    return juice;

}

console.log(fruitProcessor(10, 2));

const juice1 = fruitProcessor(5, 0);
const juice2 = fruitProcessor(6, 4);
const juice3 = fruitProcessor(8, 5);

//Function Expressions
const calAge = function (birthYear) {
    return 2025 - birthYear;
        
};

const age1 = calAge(2004);
console.log(age1);

console.log(calAge(1991));

function introduce(firstName, lastName, age) {
    const introduction = `Hi, I am ${firstName} ${lastName}, and I am ${age} years old.`;
    return introduction;

}
console.log(introduce("Jeyp", "Dela Cruz", 21));
console.log(introduce("Polvoron"));

// Return Values and Scope

function yearUntilRetirement(birthYear, firstName) {
    const age = calAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years.`;
    } else {        
        return `${firstName} has already retired.`;
    }
}

console.log(yearUntilRetirement(2004, "Jeyp"));



// Function scope
const globalVar = "I am global";

function testScope() {
    const localVar = "I am local";
    console.log(globalVar);
    console.log(localVar);

}

testScope() 
    console.log(globalVar);
    //console.log(localVar);



//Coding Challenge #1
// Function to calculate average of 3 scores
function calAverage(score1, score2, score3) {
    const average = (score1 + score2 + score3) / 3;
    return average;

}

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins...");
    }

}
let scoreDolphins = calAverage(44, 23, 71);
let scoreKoalas = calAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

scoreDolphins = calAverage(85, 54, 41);
scoreKoalas = calAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));


