import React from 'react';
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import SideBarMenus from './SideBarMenus';
import { AppState } from '../../store/AppState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faUser,faRegistered,faSignInAlt,faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const {width} = useWindowDimensions()
    if( width <= 768){
        return null;
    }

    return(
        <div className="sidebar">
            <SideBarMenus />
        </div>
    )
}

export default Sidebar