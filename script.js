//declaring variables and printing them on console
/*
var firstName = 'Leandro';
var lastName = 'Reis';
var age = 28;
var fullAge = true;
var job;

console.log('Nome: ' + firstName +' '+lastName);
console.log('Idade: ' + age);
console.log(fullAge);
console.log(job);

//type coercion
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

//Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

lastName = prompt("What is " +firstName+ "'s last name?");
console.log(firstName + ' ' + lastName);
*/
/********************************* 
 * Basic Operatiors

var now, yearJohn, yearLeandro; 
now = 2019;
ageJohn = 28;
ageLeandro = 36;

//Math Operators
yearJohn = now - ageJohn;
yearLeandro = now - ageLeandro;

console.log(yearLeandro);

console.log(now+20);
console.log(now*2);
console.log(now/10);

// Logical Operators
var isOlder;
isOlder = ageJohn < ageLeandro; // check two or more values and returns a boolean with the result
console.log(isOlder);

// typeof Operator
var x;
console.log(typeof x);
console.log(typeof 'Leandro is older than John');
console.log(typeof ageLeandro);
console.log(typeof isOlder);
*/
/************************************* 
 * Operator Precedence

var now = 2019;
var yearLeandro = 1983;
var fullAge = 18;

var isFullAge = now - yearLeandro >= fullAge;
console.log(isFullAge);

/***************************************
 * CODING CHALLENGE #1
 */
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass in variables;
2. Calculate both their BMIs;
3. Create a boolean variable containing information whether Mark has a higher BMI than John; 
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").


var markBMI, johnBMI, mass, height;
var isMarkBMIHigher;

mass = prompt("Insert Mark's mass: ");
height = prompt("Insert Mark's height: ");
markBMI = mass / (height*height);

mass = prompt("Insert John's mass: ");
height = prompt("Insert John's height: ");
johnBMI = mass / (height*height);

isMarkBMIHigher = markBMI > johnBMI;
console.log(markBMI, johnBMI);
console.log("Is Mark's BMI higher than John's?" + isMarkBMIHigher);

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon!');
}
*/
var markBMI, johnBMI, mass, height;

mass = prompt("Insert Mark's mass: ");
height = prompt("Insert Mark's height: ");
markBMI = mass / (height*height);

mass = prompt("Insert John's mass: ");
height = prompt("Insert John's height: ");
johnBMI = mass / (height*height);

if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s?');
}