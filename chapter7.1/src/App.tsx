import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {USER_TYPE} from './store/UserReducer';
import UserDisplay from './UserDisplay';

import logo from './logo.svg';
import './App.css';
// import {Provider} from "react-redux";
// import configureStore from "./store/configureStore";

function App() {

  const [userid,setUserId] = useState(0);
  const dispatch = useDispatch();



  const onChangeUserId =  async (e:React.ChangeEvent<HTMLInputElement>) => {

    const useridFromInput = e.target.value ? Number(e.target.value):1
    ;

    setUserId(useridFromInput)
  
    console.log("userid",useridFromInput)


    const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users')

    if(usersResponse.ok) {
      const users = await usersResponse.json();
      console.log("users", users);
      const usr = users.find((userItem: any) => {

        
      

       return userItem && userItem.id ==
        useridFromInput
          
        
      
      })

      dispatch({
        type: USER_TYPE,
        payload: {
          id: usr.id,
          username: usr.username,
          email: usr.email,
          city: usr.address.city
        }
      });
     
 

    }

    



    console.log(userid,"the numbers")
  }

  


  return (
    <>
    <div className="App">
        <label> user id</label>
        <input type="number" value={userid} onChange={onChangeUserId} />
    </div>
    <UserDisplay/>
    </>
  );
}

export default App;
