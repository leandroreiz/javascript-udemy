/*************************************
 *Declaring Variables and Printing on Console  

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
*/
/***************************************
 * CODING CHALLENGE #1


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
//end of challenge (success!)
*/
/****************************************
 * if and else Statements

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon!');
}

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

var firstName = 'John';
var age = '16';

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else {
    console.log(firstName + ' is a man.');
}
*/
/****************************************
 * The Ternary Operator and Switch Statements

//Ternary Operator
var firstName = 'John';
var age = 23;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';

//Switch Statement
var job = 'fisherman';

switch (job) {
    case 'teacher':
    case 'instructor':
        console.log('He is a teacher!');
        break;
    case 'driver':
        console.log('He is an Uber driver.');
        break;
    case 'cook':
        console.log('He is a cook.');
        break;
    default:
        console.log('He is unemployed.');
}

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    default:
        console.log(firstName + ' is a man');
}
*/
/*******************************
 * Truthy and Falsy values and equality operators

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;

height = 25;

if (height || height === 0) {
    console.log('Variable is declared');
} else {
    console.log('Variable has NOT been declared');
}

//The Equality Operator

if (height == '25') {
    console.log('The operator == does the type coercion');
}

if (height === '25') {
    console.log('The result above will trigger the \'else statement\'');
} else {
    console.log('The strict operator === needs the compared types to be the same');
}
*/
/*******************************
 * CODING CHALLENGE #2

John and Mike both play basketball in different teams.
In the latest 3 games, John's team scored 89, 120 and 103 points,
while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team;
2. Decide which teams win in average (highest average score),
and print the winner to the console. Also include the average
score in the output.
3. Then change the scores to show different winners. Don't forget to take
into account there might be a draw (the same average score).

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105
points. Like before, log the average winner to the console. Hint, you'll
need the && operator to take the decision.
5. Like before, change the scores to generate different winners, keeping
in mind there might be draws.    

//1
var johnTeam = 89 + 120 + 103;
var mikeTeam = 116 + 94 + 123;
var johnTeamAvg = johnTeam / 3;
var mikeTeamAvg = mikeTeam / 3;

//4
var maryTeam = 97 + 134 + 105;
var maryTeamAvg = maryTeam / 3;

//2
if (johnTeamAvg > mikeTeamAvg && johnTeamAvg > maryTeamAvg) {
    console.log('John\'s team is the winner with an average score of ' + johnTeamAvg + '. Mike\'s team scored only ' + mikeTeamAvg + ' and Mary\'s team scored ' + maryTeamAvg);
} else if (mikeTeamAvg > johnTeamAvg && mikeTeamAvg > maryTeamAvg) {
    console.log('Mike\'s team is the winner with an average score of ' + mikeTeamAvg + '. John\'s team scored only ' + johnTeamAvg + ' and Mary\'s team scored ' + maryTeamAvg);
} else if (maryTeamAvg > johnTeamAvg && maryTeamAvg > mikeTeamAvg) {
    console.log('Mary\'s team is the winner with an average score of ' + maryTeamAvg + '. John\'s team scored only ' + johnTeamAvg + ' and Mike\'s team scored ' + mikeTeamAvg);
} else {
    console.log('It\'s a draw!');
}

//3 tests were made and all the results came out as expected
//5 tests were made and all the results came out as expected

/**************************************
 * Functions

function calculateAge(birthYear) {
    return 2019 - birthYear;
}

var leandroAge = calculateAge(1990);
var JohnAge = calculateAge(1948);
var MaryAge = calculateAge(1969);

console.log(leandroAge, JohnAge, MaryAge);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
}

yearsUntilRetirement(1983, 'Leandro');
yearsUntilRetirement(1948, 'John');
yearsUntilRetirement(1969, 'Mary');

/***************************************
 * Functions Statements and Expressions

//Function Declaration
//function whatDoYouDo(job, firstName) {}

//Function Expression
var whatDoYouDo = function(job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids.';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher','John'));
console.log(whatDoYouDo('designer','Leandro'));
console.log(whatDoYouDo('driver','Jane'));
console.log(whatDoYouDo('painter','Mike'));

/******************************************
 * Arrays
 */

//initialize array
var names = ['John','Jane','Mike'];
var years = new Array(1990, 1969, 1948);
console.log(names[2]);
console.log (names.length);
console.log(years);

//mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

//different data types
var john = ['John', 'Smith', 1990, 'teacher', false];
console.log(john);

//insert data
john.push('Blue');
john.unshift('Mr.');
console.log(john);

//remove data
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(51));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);























