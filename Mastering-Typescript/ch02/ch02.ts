

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



let optionalId: IOptional = {

     id:1
}


let optionalIdName: IOptional = {

    id: 2,
    name:"optional name"

}


