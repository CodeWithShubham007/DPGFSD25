# JavaScript 
### JavaScript: JavaScript is a Single threaded, Synchronous language client side scripting language.

### Feature of JavaScript
- **Scripting Language** - Javascript executes the client-side script in the browser.
- **Interpreter **- The browser interprets JavaScript code.
- **Event Handling** - Events are actions. Javascript provides event-handling options.
- **Light Weight** - As Javascript is not a compiled language, source code never changes to byte code before running time. Low-end devices can also run Javascript because of its lightweight feature.
- **Case Sensitive** - In Javascript, names, variables, keywords, and functions are case-sensitive.
- **Control Statements** - Javascript has control statements like if-else-if, switch case, and loop. Users can write complex code using these control statements.
- **Objects as first-class Citizens** - Javascript arrays, functions, and symbols are objects which can inherit the Object prototype properties. Objects being first-class citizens means Objects can do all tasks.
- **Dynamic Typing** - Javascript variables can have any value type. The same variable can have a string value, an integer value, or any other.
- **Supports Functional Programming** - Javascript functions can be an argument to another function, can call by reference, and can assign to a variable.
- **Client-side Validations** - Javascript client-side validations allow users to submit valid data to the server during a form submission.
- **Platform Independent** - Javascript will run in the same way in all systems with any operating system. 
- **Async Processing** - Javascript async-await and promise features provide asynchronous nature. As the processes run in parallel, it improves processing time and responsiveness.

### Var, Let and Const 
In JavaScript, Var, Let, and Const are keywords used to declare variables. Each keyword has its own behavior and scoping rules.
**Var:** 
- Var is a keyword used to declare variables in JavaScript.
- Var is function-scoped, meaning that a variable declared with var inside a function is accessible throughout that entire function.
- If Var is declared outside of any function, it becomes globally scoped.
- If you declare a variable with Var twice in the same function, the second declaration will overwrite the first.

**Let:**
- Let is a keyword used to declare variables in JavaScript, just like Var.
- Let is block-scoped, meaning that a variable declared with let inside a block (e.g. a loop, an if statement, or a function) is only accessible within that block.
- If you declare a variable with Let twice in the same block, an error will be thrown.

**Const:** 
- Const is a keyword used to declare constants in JavaScript. A constant is a variable that cannot be reassigned once it has been initialized.
- Like Let, Const is also block-scoped.
- When you declare a constant, you must initialize it with a value.

### JavaScript Variable Scope - 
- The scope of a variable is the region of your program in which it is defined. 

#### Three types of scope in JavaScript.
**1. Global Scope:** The global scope is accessible from any part of your code, including functions and other scopes. Any variable or function declared outside of a function or block of code is in the global scope. Global variables are accessible from any part of your code, but they can be modified by any part of your code as well, which can lead to unexpected behavior.
```
// Global Scope
let gScope = "Hello World";
function GlobalFunc(){
    // Output: Hello World
   console.log(gScope);
}
GlobalFunc();

```

**2. Local Scope:** Local scope refers to variables or functions that are declared within a function or block of code. These variables and functions are only accessible within that function or block of code. Local scope is important because it prevents naming conflicts between different parts of your code. 
```
// Global Scope
let globalScope = "Hello World";
function LocalFunc(){
    // Local Scope
    var lScope = "PrepBytes"
    console.log(lScope);// Output: PrepBytes
}
LocalFunc();
```

**3. Block Scope:** Block scope refers to variables or functions that are declared within a block of code, such as an if statement or a for loop. Block scope was introduced in ES6 with the let and const keywords. Variables declared with let or const are only accessible within the block of code they are declared in. This helps to prevent naming conflicts and can make your code easier to understand and maintain.
```
// Block Scope
for(let i = 0 ; i < 10 ; i++){
    // Here i Follow Block Scope
    console.log(i)
    // Output: 1 to 9
}
console.log(i);
// Output: ReferenceError: i is not defined
```
#### Operator and Type of Operator in JavaScript 
In JavaScript, an operator is a special symbol used to perform operations on operands (values and variables).
- **There are seven types of operators:**
  - **Assignment Operators**- These are used to assign values to variables. The most common assignment operator is ‘=’.
``` 
// Assign a value to a variable
let value = 10;
// Assign a variable to a variable
let variable = "Shubham"
let getValue = variable;
```
- **Arithmetic Operators:**
- These are used to perform mathematical operations like addition, subtraction, multiplication, and division.
  - Addition  +
  - Subtraction  (-)
  - Multiplication (*)
  - Division  (/)
  - Modulus (remainder) (%)
  - Exponent ^^
  
- **Assignment Operators:**
  - Assign value  (=)
  - Add & assign  (+=)
  - Subtract & assign  (-=)
  - Multiply & assign  (*=)
  - Divide & assign (/=)
  
- **Comparison Operators:**
  - Equal (value only)          (==)
  - Strict Equal (value + type) (===)
  - Not equal (!=)
  - Strict not equal (!==)
  - Greater than (>)
  - Less than (<)
  - Greater or equal (>=)
  - Less or equal (<=)
- **Logical Operators:**
  - Logical AND && - id anyone id false result false
  - Logical NOT ! - reverse your output
  - Logical OR || - if any one is true result is true
- **Unary Operators:**
  - Increment  a++
  - Decrement  a--
  - Type checking (typeof)
- **Ternary Operator:**
  - condition ? value_if_true : value_if_false
- **String Operators:**
  - Concatenation +
  - Append string +=


#### Data Type in JavaScript
 **Interview Question**
**Two Type of Data Type in JavaScript**
**1. Primitive Data Type** - Store one value at a time.
- **Number** - A numerical value, including integers and floating-point numbers.
- **String** - A sequence of characters enclosed in single or double quotes.
- **Boolean** - A true/false value.
- **Null** - A special value that represents no value or empty value.
- **Undefine** - A variable that has been declared but not assigned a value.
- **Symbol** - A unique value that is used as an identifier for object properties.
**2. Non-Primitive Data Type**
- Non-Primitive Data Type (Array, Object and it’s Method)
  - **Object:** 
    - A javaScript object is an entity having state and behavior (properties and method).
    - JavaScript Object is a collection of key and value pairs.
    - JavaScript is an Object based programming language, Everything is an Object in JavaScript.
  - **Array:**  
    - JavaScript array is an object that represents a collection of similar types of elements.
    - Arrays are used to store multiple values in a single varianle. Each item in an array has a number attached to it, called a numeric index, that allows us to excess the elements.
    - **String:** 
      - The JavaScript string is an object that represents a sequence of characters.
      - In JavaScript, a string is a sequence of characters enclosed in single quotes, double quotes, or backticks. String in JavaScript are immutable, Which means that once a string is created, it cannot be changed.
      - There are Two ways to create String in JavaScript
        - By String Literal - The string literal is created with double quotes or single quotes.
        - The syntax of creating a string object using a new keyword. New Keyword is used to create an instance of String.


#### Conditional Statements
**Conditional Statements** - Conditional statements are used in programming to execute certain code blocks only if a specified condition is met. In JavaScript, there are three main types of conditional statements: if statements, if...else statements, and switch statements.
- **if statement** - The if statement checks if a condition is true, and if it is, the code block inside the statement is executed. If the condition is false, the code block is skipped.
```
let variable = 1;
let value = true;
if(value == variable){
    console.log("if statement called");
}
```
- **if...else statement** - The if...else statement checks if a condition is true. If it is, the code block inside the if statement is executed. If the condition is false, the code block inside the else statement is executed.
```
let variable = 1;
let value = true;
if(value === variable){
    console.log("if statement called...");
}
else{
    console.log('else statement called...');
}

```

- **switch statement** - The switch statement is used to compare a value against multiple possible values and execute different code blocks depending on the match.
```
// Syntax of Switch case
switch (expression) {
    case value1:
      // code to be executed if expression matches value1
      break;
    case value2:
      // code to be executed if expression matches value2
      break;
    // ...
    default:
      // code to be executed if expression doesn't match any value
  }

```

#### JavaScript Loops-
**Loop** - Javascript loop, is used to iterate the piece of code using for, while, do While, or for-in loop. It makes the code compact. It is mostly used in JavaScript Arrays.

**There are five types of loops in JavaScript:**
**1. For loop** - The JavaScript for loop iterates the elements for the fixed number of times. It should be used if the number of iterations is known.
``` 
for(loop starting condition ; loop Condition ; increment/ decrement){
    // Code We want to execute.
}
```

**2. While Loop** - The JavaScript While Loop iterates the elements for an infinite number of times. It should be used if the number of iterations is not known.
```
while(Condition){
    //Code we want to execute.
}
```

**3. Do While loop** - The JavaScript do while loop iterates the elements for an infinite number of times like while loop. But, code is executed at least once whether the condition is true or false.
```
do{
    // Code we want to execute
} while(condition)
```

**4. For in Loop** - The JavaScript for in loop is used to iterate the properties of an object.
```
for(let key of Object){
    // write the code here
}
```

**5. For of loop** - The JavaScript for of loop is used to iterate the Object like ( Array, Set, Map, String etc.)
```
for (element of iterable) {
    // Write the logic.
}
```

#### Function in JavaScript
Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure, a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.
```
Function nameOfFunction(parameter1, parameter2….. parameterN){
    // write the code as you want.
}
```

**Type of Function:**
**1. Function Declaration** - Function Declaration is the traditional way to define a function. It is somehow similar to the way we define a function in other programming languages. We start declaring using the keyword “function”. Then we write the function name and the parameters.
```
function Sum(a, b){
  console.log(a+b);
}
// Calling Function
Sum(5, 10)
```

**2. Function Expression** - Function Expression is another way to define a function in JavaScript. Here we define a function using a variable and store the returned value in that variable.
```
const Sum = function(a, b){
  console.log(a+b);
}
// Calling Function
Sum(5, 10)
```

**3. Arrow Function** - Arrow functions have been introduced in the ES6 version of JavaScript. It is used to shorten the code. Here we do not use the “function” keyword and use the arrow symbol.
```
// Array Function
const Multi = (a, b) => a * b;
const result = Multi(10, 20);
console.log(result);
```

**4. Call Back Function**- A callback function is a function that is passed as an argument to another function and is called when that function completes its task. Callback functions are commonly used in asynchronous programming to handle the results of a task that may take some time to complete.
```
// Call Back Function
function calculate(n1, n2, callback){
  const result = n1 + n2;
  callback(result);
}
function printResult(output){
  console.log(`The result is: ${output}`);
}
calculate(10, 25, printResult)
```

**5. Higher-order functions-** These are functions that take one or more functions as arguments or return a function as their result.
```
// Higher Order Function
function random(){
    return Math.floor(Math.random() * 100);
 }
  function player(name, id){
    return `${name} and ${id()}`
 }
  const p1 = player("Shubham", random);
console.log(p1);
// Output - Shubham and Random Numbe
```

**6. Anonymous functions**- These are functions that do not have a name and are typically used as arguments for other functions or as immediately invoked function expressions (IIFEs).

