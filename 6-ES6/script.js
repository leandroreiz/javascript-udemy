/*
//////////////////////////
// Lecture: let and const

// ES5
var nameES5 = 'Jane Smith';
var ageES5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const nameES6 = 'Jane Smith';
let ageES6 = 23;
//name6 = 'Jane Miller'; //script.js:13 Uncaught TypeError: Assignment to constant variable.
console.log(nameES6);

// ---------------------------------------------------------
// ES5 - function scope
function driversLicenceES5(hasPassed) {
    
    console.log(firstName); //returns 'undefined'
    if (hasPassed) {
        var firstName = 'John';
        var yearOfBirth = 1983;
    };

    console.log(firstName + ', born in ' + yearOfBirth + ' is now a driver. (ES5)');
}

driversLicenceES5(true);

// ES6 - block scope
function driversLicenceES6(hasPassed) {
    
    //console.log(firstName); //Cannot access 'firstName' before initialization
    let firstName;
    const yearOfBirth = 1983; //need to be initialized outside the block

    if (hasPassed) {
        let firstName = 'John';
    };

    console.log(firstName + ', born in ' + yearOfBirth + ' is now a driver. (ES6)');
}

driversLicenceES6(true);

// ---------------------------------------------------------
// ES5
var iES5 = 21;

for (var iES5 = 0; iES5 < 5; iES5++) {
    console.log(iES5);
}

console.log(iES5);

// ES6
console.log('-------------------------------------');
let iES6 = 21;

for (let iES6 = 0; iES6 < 5; iES6++) {
    console.log(iES6);
}

console.log(iES6 + ' - the variable \'i\' declared outside the loop was not affected');

/////////////////////////////
// Lecture: Blocks and IIFEs
// IIFE stands for Immediately Invoked Function Expressions

// ES5
(function(){
    var d = 10;
})();

//console.log(d); //d is not defined

// ES6
{
    let a = 12;
    const b = 10;
    var c = 14;
}

//console.log(a); //a is not defined
console.log(c); //result = 14 --> because it was declared as a 'var' and this makes it 'function scoped' and not 'block scoped'

///////////////////////////
// Lecture: Strings in ES6

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1983;

function calcAge(year) {
    return 2019 - yearOfBirth;
};

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he\'s ' + calcAge(yearOfBirth) + ' years old.');

// ES6 - Template Literal
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he's ${calcAge(yearOfBirth)} years old.`);
// Need to use the backtick (`) to activate the template literals

// new methods for strings

console.log(`${firstName} ${lastName}`.startsWith('J'));
console.log(`${firstName} ${lastName}`.endsWith('th'));
console.log(`${firstName} ${lastName}`.includes(' '));
console.log(`${firstName} `.repeat(3));

////////////////////////////
// Lecture: Arrow functions

const years = [1983, 1986, 1947, 2006];

// ES5
var agesES5 = years.map(function(el) {
    return 2019 - el;
});

console.log(agesES5);

// ES6
// Simple arrow function
let agesES6 = years.map(el => 2019 - el);
console.log(agesES6);

// With more than one argument
agesES6 = years.map ((el, index) => `Age element ${index +1}: ${2019 - el},`);
console.log(agesES6);

// With multiple lines of code
agesES6 = years.map ((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return  `Age element ${index +1}: ${age},`
});
console.log(agesES6);

///////////////////////////////
// Lecture: Arrow functions II

// ES5
var boxES5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        
        var self = this; //so we can have access to the 'this' statement

        document.querySelector('.green').addEventListener('click', function () {
            var str = 'This is box number ' + self.position + ' and its color is ' + self.color + '. (ES5)';
            alert(str);
        });
    }
};

//boxES5.clickMe();

// ES6
const boxES6 = {
    color: 'green',
    position: 1,
    clickMe: function() {

        //the arrow function shares the lexical 'this' keyword of its surroundings
        document.querySelector('.green').addEventListener('click', () => {
            const str = 'This is box number ' + this.position + ' and its color is ' + this.color + '. (ES6)';
            alert(str);
        });
    }
};

boxES6.clickMe();


// A little bit more about arrow functions
function Person(name) {
    this.name = name;
};

// ES5
Person.prototype.myFriendsES5 = function(friendsArr) {
    
    var arr = friendsArr.map(function(el){
        return this.name + ' is friends with ' + el;
    }.bind(this));

    console.log(arr);
};

var friends = ['Bob', 'Mary', 'Chris'];
new Person('Leandro').myFriendsES5(friends);
//the command 'this.name' doesn't return the spcified value once the scope of it is outside the method. So it is needed to add the '.bind(this)' in the function so we can use it properly.

// ES6
Person.prototype.myFriendsES6 = function(friendsArr) {
    
    var arr = friendsArr.map(el => `${this.name} is friends with ${el}`);
    console.log(arr);
};

new Person('Chelem').myFriendsES6(friends);

//////////////////////////
// Lecture: Destructuring

// ES5
var john = ['John', 25];
//var name = john[0];
//var age = john[1];

// ES6
const [name, age] = john; //that's the same as = ['John', 25]
console.log(name, age);

obj = {
    firstName: 'John',
    lastName: 'Smith'
};

//destructing an object
const {firstName, lastName} = obj;
console.log(firstName, lastName);

//changing the name of the variables
const {firstName: a, lastName: b} = obj;
console.log(a, b);

// ---------------------------------------------------------
// More practical examples of destructing

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
};

const [age2, retirement] = calcAgeRetirement(1983);
console.log(age2, retirement);
*/
//////////////////////////////////
// Lecture: Arrays in ES6/ ES2015





























