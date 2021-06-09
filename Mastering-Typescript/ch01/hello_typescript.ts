console.log(`hello Typescript`);

var version = `e6`;


console.log(`hello ${version} Typescript`)


var myString : string = 'this is a string';



var myBoolean : boolean = true;
var myNumber : number = 1234;
var myStringArray: string[] = ['first',`second`, `third`]



var inferredString = "this is a string";
var inferredNumber = 5;


// inferredNumber = inferredString;


function calculate(a:number,b:number,c:number) :number{

     return(a*b) + c
}



function printString(a:string) :void {

    console.log(a);



}


var returnedValue : string = printString("this is a string")

