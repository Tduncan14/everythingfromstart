import React,{useEffect,useState} from "react";
import { useWindowDimensions } from './hooks/useWindowDimensions';
import {getCategories} from '../components/services/DataService';
import Category from "./models/Category";

const LeftMenu = () => {

    const{width} = useWindowDimensions();
    const [categories,setCatgories] = useState<JSX.Element>(
        <div>Left Menu</div>
    )

    useEffect(() => {

        getCategories()
        .then((categories: Array<Category>) => {

            const cats = categories.map((cat) => {

                return <li key={cat.id}>{cat.name}</li>
            });
            setCatgories(<ul className="category">
                {cats}
            </ul>)
        })
        .catch((err:any ) => {
            console.log(err)
        })


    },[])

    if(width <= 768){

        return null;
    }
     
    return <div className="leftmenu">{categories}</div>


}


export default LeftMenu