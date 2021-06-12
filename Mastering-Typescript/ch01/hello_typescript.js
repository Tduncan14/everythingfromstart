var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
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
var array = ["123", "456", "789"];
delete array[0];
for (var i = 0; i < array.length; i++) {
    console.log("array[" + i + "] = " + array[i]);
}
var firstObj = { id: 1, name: "firstObj" };
var secondObj = __assign({}, firstObj);
console.log("secondObj: " + JSON.stringify(secondObj));
var nameObj = { name: "nameObj name" };
var idObj = { id: 1 };
var ojb3 = __assign(__assign({}, nameObj), { idObj: idObj });
console.log("obj3 = " + JSON.stringify(ojb3));
//  spreading with arrays
var firstArray = [1, 2, 3];
var secondArray = [3, 4, 5];
var thirdArray = __spreadArray(__spreadArray([], firstArray), secondArray);
console.log("third array = " + thirdArray);
var objArray1 = [{
        id: 1, name: "first element"
    }];
var objArray2 = [{
        id: 2, name: "second elen"
    }];
var objArray3 = __spreadArray(__spreadArray(__spreadArray([], objArray1), [
    { id: 3, name: "third element" }
]), objArray2);
var tuple1;
tuple1 = ["test", true];
// tuple1 = ["test"];
// Object destructuing
var complexObject = {
    aNum: 1,
    bStr: "name",
    cBool: true
};
var aNum = complexObject.aNum, bStr = complexObject.bStr, cBool = complexObject.cBool;
console.log("aNum : " + aNum);
console.log("bStr : " + bStr);
console.log("cBool : " + cBool);
function concatValues(a, b) {
    console.log("a+b = " + (a + b));
}
concatValues("first", "second");
concatValues("first,");
// default parameters
function concatWithDefault(a, b) {
    if (b === void 0) { b = "default"; }
    console.log("a+b =" + (a + b));
}
concatWithDefault("first", "second");
concatWithDefault("third");
// function testArguments  () {
//      for(var i = 0; i < arguments.length; i++){
//         console.log(`argument${i} = ${arguments[i]}`)
//      }
// }
// testArguments(1,2)
// testArguments("first","second","third")
function testArguments() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var i in args) {
        console.log("args[" + i + "] = " + args[i]);
    }
}
testArguments("1");
testArguments(10, 20);
