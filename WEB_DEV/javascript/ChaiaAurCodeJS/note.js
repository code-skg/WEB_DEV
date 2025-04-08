
/*
Q . What is Hoisting in JavaScript ?
Hoisting is JavaScript's default behavior of moving 
declarations (not initializations) to the top of 
their scope (either global or function scope) before 
code is executed.

In simple terms:

JavaScript "hoists" (lifts) the variable and function 
declarations to the top of their scope during the compile phase.

Variable Hoisting Example


console.log(a); // undefined
var a = 5;

What JavaScript really sees behind the scenes:---
var a;        // declaration is hoisted
console.log(a); // undefined
a = 5;        // initialization happens here
var gets hoisted and initialized with undefined.*/