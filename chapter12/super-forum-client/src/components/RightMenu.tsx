import React from 'react';
import { useWindowDimensions } from './hooks/useWindowDimensions';


const Rightmenu = () => {

    const{width} = useWindowDimensions();
    if(width < 768) {
        return null
    }



    return <main className="rightmenu">Right menu</main>
}

export default Rightmenu