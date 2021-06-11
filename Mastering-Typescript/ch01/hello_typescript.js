console.log("hello Typescript");
var version = "e6";
console.log("hello " + version + " Typescript");
var myString = 'this is a string';
var myBoolean = true;
var myNumber = 1234;
var myStringArray = ['first', "second", "third"];
var inferredString = "this is a string";
var inferredNumber = 5;
// inferredNumber = inferredString;
function calculate(a, b, c) {
    return (a * b) + c;
}
function printString(a) {
    console.log(a);
}
// var returnedValue : string = printString("this is a string")
var item1 = { id: 1, name: "item" };
item1 = { id: 2 };
var item1 = { id: 1, name: "name" };
item1 = { id: 2 };
var item2 = { id: 3, name: "treek" };
item2 = 24;
function printObject(obj) {
    console.log("obj = " + obj);
}
//  function addWithUnion(
//     arg1:string | number,
//     arg2: string | number
//  ){
//     return arg1 + arg2
//  }
function addWithTypeGuard(arg1, arg2) {
    if (typeof arg1 === "string") {
        console.log("arg1 is of type string");
        return arg1 + arg2;
    }
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        //if both are numbers
        console.log("arg1 and arg2 are numbers");
        return arg1 + arg2;
    }
    console.log("default treat them both as strings");
    return arg1.toString() + arg2.toString();
}
console.log("\"1\",\"2\" = " + addWithTypeGuard("1", "2") + " arg1 is a type of string");
console.log("1, 2  =  " + addWithTypeGuard(1, 2) + " arg1 and arg2 are numbers ");
console.log("1, \"2\" = " + addWithTypeGuard(1, "2"));
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Closed"] = 1] = "Closed";
})(DoorState || (DoorState = {}));
function checkDoorState(state) {
    console.log("enum value is : " + state);
    switch (state) {
        case DoorState.Open:
            console.log("Door is open");
            break;
        case DoorState.Closed:
            console.log("Door is closed");
            break;
    }
}
checkDoorState(DoorState.Open);
checkDoorState(DoorState.Closed);
