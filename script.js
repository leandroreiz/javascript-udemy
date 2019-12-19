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
*/
var now = 2019;
var yearLeandro = 1983;
var fullAge = 18;

var isFullAge = now - yearLeandro >= fullAge;
console.log(isFullAge);



















