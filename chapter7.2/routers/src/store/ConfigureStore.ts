import {createStore} from 'redux';
import {RootReducer} from './AppState';



 const  configureStore = () =>{


    return createStore(
        RootReducer,{})




 }


 export  default configureStore;