/*
//Objects and Prototypes

//a simple object
var john = {
    name: 'John',
    yearOfBirth: 1983,
    job: 'teacher'
};

//creating a constructor
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

//adding the function to the constructor's prototype
Person.prototype.calculateAge = function () {
    console.log(2019 - this.yearOfBirth);
};

//adding a property to the constructor's prototype
Person.prototype.lastName = 'Smith';

//creating new objects through the constructor
var john = new Person ('John', 1983, 'teacher');
var jane = new Person ('Jane', 1986, 'sales manager');
var mark = new Person ('Mark', 1975, 'retired');

//notice that even the method 'calculateAge' not being defined in the declaration
//of the constructor, these objects can use it through the prototype due to the inheritance
john.calculateAge();
jane.calculateAge();
mark.calculateAge();

//here we can see that all the objects have the property lastName
console.log(john.name, john.lastName);
console.log(jane.name, jane.lastName);
console.log(mark.name, mark.lastName);
*/
/*
//Object.create
var personProto = {
    calculateAge: function() {
        console.log(2019 - yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1983;
john.job = 'teacher';

var jane = Object.create(personProto, 
    {
        name: {value:'Jane'},
        yearOfBirth: {value: 1986},
        job: {value: 'designer'}
    });

//primitives vs objects

//primitives
var a = 23;
var b = a;
a = 45;
console.log(a,b);
//hold their own copy of the data

//objects
var obj1 = {
    name: 'John',
    age: 23
};

var obj2 = obj1;
obj1.age = 45;
console.log(obj1.age,obj2.age);
//objects 1 & 2 hold a reference that point to the exact same object in the memory

//functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco'
};

change(age, obj);
console.log(age,obj.city);

//when we pass a primitive into a function a simple copy is created, so we can alterate its value and it won't be changes outside.
//when we pass an object, we're passing a reference of where this object is in the memory, so when we change it inside the function we're alterating the object itself.
*/
/*
////////////////////////////////////////
//Lecture: Passing function as arguments

var years = [1983, 1986, 2003, 1947, 1945];

function arrayCalc (arr,fn) {
    var resultArray = [];
    for (var i = 0; i < arr.length; i++) {
        resultArray.push(fn(arr[i]));
    }
    return resultArray;
}

function calcAge(el) { return 2019 - el; }

function isFullAge(el) { return el >= 18; }

function maxHeartRate(el) {
    if (el >= 18 && el <= 81 ) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years,calcAge);
console.log(ages);

var fullAge = arrayCalc(ages, isFullAge);
console.log(fullAge);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);
*/
/*
////////////////////////////////////////
//Lecture: Functions returning functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', could you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Jane');

interviewQuestion('driver')('Mark');
*/
//////////////////////////////////////////////////////////
//Lecture: Immediately Invoked Function Expressions (IIFE)
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();

(function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function game(lucky) {
    var score = Math.random() * 10;
    console.log(score >= 5 - lucky);
})(5);
*/
/*
////////////////////
//Lecture: Closures

function retirement (retirementAge) {
    a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var timeUntilRetirement = retirement(65)(1983);
//console.log(timeUntilRetirement);

//Closure: An inner function has always access to the variables and parameters
//of its outer function, even after the outer function has returned.

function interviewQuestion(job) {
    return function(name) {
        if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else if (job === 'designer') {
            console.log(name + ', could you please explain what UX design is?');
        } else {
            console.log('What do you do?');
        }
    }
}

interviewQuestion('designer')('Leandro');
interviewQuestion('teacher')('Chelem');
*/
/*
///////////////////////////////////////////
//Lecture: BiquadFilterNode, call and apply

var john = {
    name: 'John',
    age: 36,
    job: 'Front-End Developer',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? My name is ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        } else {
            console.log('');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 33,
    job: 'teacher'
};

john.presentation('formal','morning');
john.presentation('friendly','evening');

//call
john.presentation.call(emily,'formal','afternoon');

//apply
//john.presentation.apply(emily,['formal','night']);

//bind - returns a function
var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('mornin\'');
*/
///////////////////////////////////////////
// CHALLENGE #7
// --- Let's build a fun quiz game in the console ---
/*
1. Build a function constructor called Question to describe a question. A question should include:
a) the question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc)
c) correct answer (I would use a number for this)*/
var Question = function (question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

//2. Create a couple of question using the constructor
var questionOne = new Question('What does the fox say?', ['1. Woof', '2. Meow', '3. Ring-ding-ding-ding-dingeringeding!'], 2);
var questionTwo = new Question('Is JavaScript the funniest programming language ever?', ['1. Yes', '2. No'], 0);
var questionThree = new Question('Where should I include the link to a .js file?', ['1. You don\'t need to declare that', '2. It\'s usual to inform it at the end of the body section', '3. Inside the head tag'], 1);

//3. Store them all inside an array
var questionsArray = [questionOne, questionTwo, questionThree];

/*
4. Select one random question and log it on the console, together with the possible answers (each question should have a number)
(Hint: write a method for the Question objects for this task)*/
Question.prototype.randomize = function (arr) {
    var n = Math.floor(Math.random() * questionsArray.length);
    
    console.log(arr[n].question);
    
    for (var i = 0; i < arr[n].answers.length; i++) {
        console.log(arr[n].answers[i]);
    }
    return n;
}

/*
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer
such as you displayed it on task 4.*/
var questionNumber = questionOne.randomize(questionsArray);
var userAnswer = prompt('Select the correct answer: ');

/*
6. Check if the answer is correct and print to the console whether the answer is correct or not
(Hint: write another method for this)*/
function checkAnswer(question, answer) {
    if (questionsArray[question].correctAnswer === answer-1) {
        console.log('Correct :)');
    } else {
        console.log('Wrong :(');
    };
}

checkAnswer(questionNumber,userAnswer);

/*
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private
and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).*/