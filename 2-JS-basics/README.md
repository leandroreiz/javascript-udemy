## Javascript Basic Commands
Content studied on 17/12/19

* console.log('message'); -> Print a message on console
* var variable-name = value; -> Declare a variable
    In Javascript you don't need to declare the type of a variable. In this case the type will be automatically defined as 'undefined'
* // -> line comment
* /**/ -> multi-line/block comment

## Primitive Javascript Data Types
### number
Floating point numbers, for decimal and integers
### string
Sequence of characters, used for text
### boolean
Logical data type that can only be true or false
### undefined
Data Type of a variable that does not have a value yet
### null
Also means 'non-existent'

Content studied on 18/12/19
* alert() -> Creates a pop-up window with the message contained between the parenthesis
* prompt() -> Asks for an input from the user that can be stored in a variable

### Type coercion
Is the process of converting value from one type to another (such as string to number, object to boolean, and so on).

### Variable mutation
When you mutate a variable you are modifying the original value.

* if and else statements:
    if (condition) {
        'commands to be executed if the condition IS true'
    } else {
        'commands to be executed if the condition IS NOT true'
    }

Content studied on 19/12/19
## Boolean Logic (NOT, AND & OR)

&& -> AND
|| -> OR
!  -> NOT

## The Ternary Operator and Switch Statements
(condition) ? if statement (or true) : else statement (or false);

switch (job) {
    case 'teacher':
    case 'instructor':
        console.log('He is a teacher!');
        break;
    case 'driver':
        console.log('He is an Uber driver.');
        break;
    default:
        console.log('He is unemployed.');
} 

## Truthy and Falsy values and equality operators
Falsy values: undefined, null, 0, '', NaN
Truthy values: NOT falsy values

## The Equality Operator
==   -> This operator does the type coercion.
===  -> This is a strict operator and it needs to be compared with variables of the same type.

