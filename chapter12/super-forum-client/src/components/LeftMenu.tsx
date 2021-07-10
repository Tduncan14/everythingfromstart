import React from 'react';
import { useWindowDimensions } from './hooks/useWindowDimensions';



const LeftMenu = () => {

    const{width} = useWindowDimensions();
    if(width <= 768) {
        return null;
    }
     
    return <div className="sidebar">Leftmenu</div>


}


export default LeftMenu