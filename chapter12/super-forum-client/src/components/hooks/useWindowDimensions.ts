import React, {useState,useEffect} from 'react';
import { number } from 'yargs';

  
interface WindowDimension {
    height:number,
    width:number
}

export const useWindowDimensions = (): any => {

    const [dimension,setDimension] = useState<WindowDimension>({
        height:window.innerHeight,
        width:window.innerWidth
    })

  
    const handleResize = () => {
       
        setDimension:({
            height:window.innerHeight,
            width:window.innerWidth
        })
    };


    useEffect(() =>{
           window.addEventListener("resize",handleResize);
           handleResize();


           return () => {
               window.removeEventListener("resize",handleResize)
           };
    },[]);


    return dimension

}

