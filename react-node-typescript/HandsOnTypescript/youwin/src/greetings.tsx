import React from 'react';




interface GreetingsProps {

    message:string
}


export default function Greeting(props: GreetingsProps){

         console.log("rendering Greeting")



         return(
             <div>
                 {props.message}
             </div>
         )



}