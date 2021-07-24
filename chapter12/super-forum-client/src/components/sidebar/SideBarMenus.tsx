import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faRegistered,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";   
import {AppState}  from "../../store/AppState"

const SideBarMenus = () => {

    const user = useSelector((state: AppState ) => state.user)
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch({
            type: "USER_PROFILE_SET",
             payload:{
                 id: 1,
                 userName:"testUser"
             },
        });

    },[dispatch])

    return ( 
        <>
          <ul>
          <li>
          <FontAwesomeIcon icon={faUser} />
          <span className="menu-name">{user?.userName}          </span>
        </li>
        <li>
          <FontAwesomeIcon icon={faRegistered} />
          <span className="menu-name">register</span>
        </li>

          </ul>
        </>
    )
}


export default SideBarMenus