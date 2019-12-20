///////////////////////////////////////
// Lecture: Hoisting
/*
//function declaration
calculateAge(1983);
function calculateAge (year) {
    console.log(2018 - year);
}

//retirement(1983);
//Does not work because it is a function expression
var retirement = function(year) {
    console.log(65 - (2019-year));
}

//variables
console.log(age); //a
var age = 23;

function foo() {
    var age = 65; //b
    console.log(age); // b)inside the function context
}

foo();
console.log(age); // a)inside the global context
*/
///////////////////////////////////////
// Lecture: Scoping Chain
/*
// First scoping example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

// Example to show the differece between execution stack and scope chain
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/
/*this code doesn't work because the third function
    has access only to the variables a and d from the
    global context.*/
///////////////////////////////////////
// Lecture: The this keyword
/*
console.log(this);

calcAge(1983);

function calcAge (year) {
    console.log(2019 - year);
    console.log(this); //window from global context
}
*/

var john = {
    name: 'John',
    yearOfBirth: 1983,
    calcAge: function() {
        console.log(this);
        console.log(2019 - this.yearOfBirth);
        /*
        function innerFunction() {
            console.log(this);
        };
        innerFunction(); */
    }
}

john.calcAge();
//When a regular function call happens then the default object is the window object.
//When we call a regular function (not a method), it points to the window object, not the 'john' object

var mike = {
    name: 'Mike',
    yearOfBirth: 1990
}

mike.calcAge = john.calcAge;
mike.calcAge();