import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import {AppState}  from "../../store/AppState"

const SideBarMenus = () => {

    const user = useSelector((state: AppState ) => state.user)
    const dispatch = useDispatch();



}