"use strict";
console.log(`hello Typescript`);
var version = `e6`;
console.log(`hello ${version} Typescript`);
var myString = 'this is a string';
var myBoolean = true;
var myNumber = 1234;
var myStringArray = ['first', `second`, `third`];
var inferredString = "this is a string";
var inferredNumber = 5;
// inferredNumber = inferredString;
function calculate(a, b, c) {
    return (a * b) + c;
}
function printString(a) {
    console.log(a);
}
var returnedValue = printString("this is a string");
