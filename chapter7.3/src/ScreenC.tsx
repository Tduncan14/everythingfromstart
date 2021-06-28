import React, {FC, useEffect} from "react";
import {useHistory,useParams} from 'react-router-dom';


interface ScreenCProps{
    message:string
    history:any;
    match:any
}


const ScreenC: FC<ScreenCProps> = (props) => {



    const {userid} = useParams()
    const history = useHistory();

    const onClickGoBack = () => {


        history.goBack()

        // props.history.goBack()
    }



   
  


    // useEffect(() => {

    //     setTimeout(() => {
            
    //         props.history.push('/')
    //     }, 3000);
    // })


    return (
        <div>
            {/* <div>{`Your id is ${props.match.params.userid}`}</div> */}
            <div>{userid}</div>
            <div>{props.message}</div>

            <div>
                <button onClick = {onClickGoBack} >Go Back</button>
            </div>
        </div>
    )

}


export default ScreenC