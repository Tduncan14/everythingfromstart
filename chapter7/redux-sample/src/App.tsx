import React,{useState} from 'react';
import './App.css'
import { useDispatch } from 'react-redux';
import {USER_TYPE} from '../../store/UserReducer';
import UserDisplay from './UserDisplay';

function App() {

   const [userid, setUserid] = useState(0);
   const dispatch = useDispatch()

   const onChangeUserId = async (e:React.ChangeEvent<HTMLInputElement>)=>{


    console.log("userid",e.target.value)

    const useridFromInput = e.target.value ? 
    Number(e.target.value) : 0;

    setUserid(useridFromInput);

    const usersResponse = await fetch(`jsonplaceholder.typicode.com/users`)
    if(usersResponse.ok){

      const users = await usersResponse.json();
      console.log("users",users);

      const usr = users.find((userItem: any) => {


        return userItem && userItem.id === useridFromInput;


      })

      console.log("usr",usr);


      dispatch({
        type:USER_TYPE,
        payload:{
          
          id: usr.id,
          username:usr.name,
          email:usr.email,
          city:usr.address.city


        }
      })


    }


   }
  

   return(
     <div className="App">
        <label>user id</label>
        <input value={userid} onChange={onChangeUserId}/>
        <UserDisplay />
     </div>
     
   )
}

export default App;
