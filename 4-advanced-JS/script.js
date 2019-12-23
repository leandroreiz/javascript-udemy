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
*/
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










































