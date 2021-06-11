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


// var returnedValue : string = printString("this is a string")


 var item1: any = {id:1, name:"item"};

 item1 ={id:2}



 var item1 = <any>{id:1, name:"name"};
 item1 = {id:2};


var item2 = {id:3, name:"treek"} as any;

 item2 = 24






 



