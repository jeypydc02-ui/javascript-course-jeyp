
// // console.log("Part 2: Functions is ready.");

// // //functions - declarations and Expressions
// // function logger() {
// //     console.log("My name is Jeyp");

// // }

// // logger();
// // logger();
// // logger();

// // function fruitProcessor(strawberries, oranges) {
// //     console.log(strawberries, oranges);
// //     const juice = `Juice with ${strawberries} strawberries and ${oranges} oranges.`;
// //     return juice;

// // }

// // console.log(fruitProcessor(10, 2));

// // const juice1 = fruitProcessor(5, 0);
// // const juice2 = fruitProcessor(6, 4);
// // const juice3 = fruitProcessor(8, 5);

// // //Function Expressions
// // const calAge = function (birthYear) {
// //     return 2025 - birthYear;
        
// // };

// // const age1 = calAge(2004);
// // console.log(age1);

// // console.log(calAge(1991));

// // function introduce(firstName, lastName, age) {
// //     const introduction = `Hi, I am ${firstName} ${lastName}, and I am ${age} years old.`;
// //     return introduction;

// // }
// // console.log(introduce("Jeyp", "Dela Cruz", 21));
// // console.log(introduce("Polvoron"));

// // // Return Values and Scope

// // function yearUntilRetirement(birthYear, firstName) {
// //     const age = calAge(birthYear);
// //     const retirement = 65 - age;

// //     if (retirement > 0) {
// //         return `${firstName} retires in ${retirement} years.`;
// //     } else {        
// //         return `${firstName} has already retired.`;
// //     }
// // }

// // console.log(yearUntilRetirement(2004, "Jeyp"));



// // // Function scope
// // const globalVar = "I am global";

// // function testScope() {
// //     const localVar = "I am local";
// //     console.log(globalVar);
// //     console.log(localVar);

// // }

// // testScope() 
// //     console.log(globalVar);
// //     //console.log(localVar);



// // //Coding Challenge #1
// // // Function to calculate average of 3 scores
// // function calAverage(score1, score2, score3) {
// //     const average = (score1 + score2 + score3) / 3;
// //     return average;

// // }

// // function checkWinner(avgDolphins, avgKoalas) {
// //     if (avgDolphins >= 2 * avgKoalas) {
// //         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
// //     } else if (avgKoalas >= 2 * avgDolphins) {
// //         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
// //     } else {
// //         console.log("No team wins...");
// //     }

// // }

// // // Test Data 1
// // let scoreDolphins = calAverage(44, 23, 71);
// // let scoreKoalas = calAverage(65, 54, 49);
// // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // Test Data 2
// // scoreDolphins = calAverage(85, 54, 41);
// // scoreKoalas = calAverage(23, 34, 27);
// // console.log(checkWinner(scoreDolphins, scoreKoalas));



// const grades = [90, 89, 93, 92, 98];
// console.log(grades);

// console.log(`My gade is ` + grades[0]);

// const friends = ["Jeyp", "Jampol", "Thom", "Adie"];
// console.log(friends);

// const mixed = ["Jeypee", 21, false, friends];
// console.log(mixed);

// const years = new Array(2000, 2001, 2002, 2003, 2004);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);

// //access the length
// console.log(friends.length);

// //Changan array elements

// friends[0] = "Richmond";
// console.log(friends);

// const calcAge = function (birthYear) {
//     return 2025 - birthYear;

// };

// const ages = [calcAge(2004), calcAge(2003), calcAge(2001)];
// console.log(ages);


// const newLength = friends.push("Jesus");
// console.log(friends);
// console.log(friends.length);

// friends.unshift("Joshua");
// console.log(friends);
// console.log(friends.length);

// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// console.log(friends.indexOf("Richmond"));
// console.log(friends.indexOf("Peter"));

// console.log(friends.includes("Adie"));
// console.log(friends.includes("Joshua"));
// console.log(friends.includes("Jampol"));


// // Array Iteration
// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);

// }friends.forEach(
//     function(friends, index) {
//         console.log(`${index}: ${friends}`);
//     }
// );

// friends.forEach(
//     (friends, index) => {
//         console.log(`Friend ${index + 1}: ${friends}`);
//     }
// )

// const grades2 = [89, 99, 95, 96, 91, 90];
// let total =0;

// for (let i = 0; i< grades2.length; i++) {
//     total += grades2[i];

// }


// const average = total / grades2.length;
// console.log(`Average grade: ${average.toFixed(2)}`);

// let passedCount = 0;
// grades2.forEach((grade) => {
//     if (grade >= 70) passedCount++;
// });

// console.log(`${passedCount} out of ${grades2.length} students passed`);

// //The challenge

// ////////////////////////////////////
// // Coding Challenge #2 - Student Grade Manager

// const grades3 = [78, 85, 92, 67, 88, 95, 73, 82];
// let sum = 0;

// // Function to calculate average
// function calculateAverage(grades) {
    
// for (let i = 0; i < grades3.length; i++) {
//     sum += grades3[i];
// }
// return sum / grades3.length;
// }


// function findHighestGrade(grades) {

//     let highest = grades[0];
//     for (let i = 1; i < grades.length; i++) {
//         if (grades[i] > highest) {
//             highest = grades[i];
//         }
//     }
//     return highest;
  
// }

// function findLowestGrade(grades) {
//   let lowest = grades[0];
//   for (let i = 1; i < grades.length; i++) {
//     if (grades[i] < lowest) {
//       lowest = grades[i];
//     }
//   }
//     return lowest;
// }

// // Function to count passing students
// function countPassing(grades, passingGrade) {   
//     let count = 0;
//     for (let i = 0; i < grades.length; i++) {
//         if (grades[i] >= passingGrade) {
//             count++;
//         }
//     }
//     return count;
// }       
 

// // Generate complete report
// const averages = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);



// HOUR 3

// Problems with Arrays

const jeypArray = [
    "Jeyp",
    "Dela Cruz",
    2025 - 2004,
    "Student",
    ["Adie", "Thom", "Richmond", "Jampol"]
];
console.log(jeypArray[0])
console.log(jeypArray[1]);
console.log(jeypArray[2]);

const jeypObject = {
    firstName: 'Jeyp',
    lastName: 'Dela Cruz',
    age: 2025 - 2004,   
    job: 'Student',
    friends: ['Adie', 'Thom', 'Richmond', 'Jampol']
};

console.log(jeypObject);




