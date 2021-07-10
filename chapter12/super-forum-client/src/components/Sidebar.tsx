import React from 'react';
import { useWindowDimensions } from './hooks/useWindowDimensions';


const Sidebar = () => {

    const {width} = useWindowDimensions()
    if( width <= 768){
        return null;
    }

    return <main className="sidebar">Sidebar</main>
}

export default Sidebar