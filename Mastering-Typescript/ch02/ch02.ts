

interface IIdName {
    id:number,
    name:string
}

// does not work


// let idObject: IIdname = {

//     id:


// }


interface IOptional {
    id:number,
    name?:string
}



let optionald: IOptional = {

     id:1
}


let optionaldName: IOptional = {

    id: 2,
    name:"optional name"

}


interface IWeakType {
    id?:number,
    name?:string
}


// let weakTypeNoOverlap: IWeakType = {

//   description:"a descritpion"



// }

interface  IIdname{
    id:number,
    name:string
}


interface IDescValue {

    descr:string,
    value:number
}


function printNameOrValue(
    obj: IIdName | IDescValue
):void{

    if('id'in obj){
        console.log(`obj.name : ${obj.name}`)
    }


    if('descr' in obj){

        console.log(`obj.value: ${obj.value}`)
    }


}



interface Iperson {
    id:number,
    name:string
}


type PersonPropertyName = keyof Iperson



function getProperty(key: PersonPropertyName, value: Iperson){


    console.log(`${key} = ${value[key]}`)
}

// getProperty("id",
//     { id: 1, name: "firstName" }
// );
// getProperty("name",
//     { id: 2, name: "secondName" }
// );
// getProperty("telephone",
//     { id: 3, name: "thirdName" }
// );


