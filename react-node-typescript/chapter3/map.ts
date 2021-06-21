
const employees = [

    {name:`tim`,id:1},
    {name:`tim`,id:1},
    {name:`tim`,id:1},

]


const elements = employees.map((item,index) =>{

     return `<div> ${item.id} - ${item.name} </div>`
});

console.log(elements)