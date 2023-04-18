// Log a statement
//console.log('Hello from main.js');




// Variables

//let age = 21;
//console.log(age);

//const salary = 0;
//salary = 80000;
//console.log(salary);

//let sum = 0
//sum = 5;
//console.log(sum)




// Data types
/*
const name = 'Jure';
const language = 'JavaScript';

const total = 0;
const PI = 3.14;

const isPrimaryNumber = true;
const isNewUser = false;

let result;
console.log(result);

const res = null;

const data = null;

const person ={
    firstName: 'Jure',
    lastName: 'Kotnik',
    age: 21
}

console.log(person.firstName);

const oddNumbers = [1, 3, 5, 7, 9];
console.log(oddNumbers[0]);

let a = 10;
a = 'lalala';
a = true;
console.log(a);
*/



//Operators

// let x = 10;
// let y = 5;
// console.log(x % y);
// console.log(++x);
// console.log(--y);

// console.log(x > y);

// const isValidNumber = x > 20 || 8 > y;
// console.log(isValidNumber);

// const isValid = false;
// console.log(!isValid);

// console.log('Jure ' + 'Kotnik');

// const isEven = 10 % 2 === 0 ? true : false;
// console.log(isEven);




// Type conversion


// console.log(true + '3');
// console.log('4' - '2');
// console.log('4' * '2');
// console.log('4' / '2');
// console.log('Jure' - 'Kotnik');
// console.log('5' - null);
// console.log(5 + undefined);

// console.log(Number(''));
// console.log(parseInt('5'));
// console.log(parseFloat('3.14'));
// console.log(String(500));
// console.log((500).toString());
// console.log(Boolean(10)); // null undefined 0 '' NaN in booelan return false

//Equality

// const var1 = null;
// const var2 = undefined;
// console.log(var1 == var2);
// console.log(var1 === var2);




//Conditional Statements


// const num = 0;
// if(num > 0){
//     console.log('Number is positive');
// } else if(num < 0){
//         console.log('Number is not positive');    
// } else{
//     console.log('Number is zero');
// }

// const color = 'blue';

// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     case 'green':
//         console.log('color is green');
//         break;
//         default:
//             console.log('Not a valid color');
// }



//Looping code

// for(let i = 1; i <= 5; i++){
//     console.log('Iteration number ' + i);
// }

// let i = 1;
// while(i <= 5){
//     console.log('Iteration number ' + i);
//     i++;
// }

// let k = 6;
// do{
//     console.log('Iteration number ' + k);
// }
// while(k <= 5);

// const numArray = [1, 2, 3, 4, 5];
// for(const num of numArray){
//     console.log('Iteration number ' + num);
// }



//Functions


function greet(username){
    console.log('good morning ' + username);
}

greet('Bruce');
greet('Clark');
greet('Diana');

function add(a, b){
    return a + b;
}

const arrowSum = (a, b) => a + b;
const addFive = (num) => num + 5;

const sum = arrowSum(5, 10);
console.log(sum);








