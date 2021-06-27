import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {USER_TYPE} from './store/UserReducer';
import UserDisplay from './UserDisplay';
import { POST_TYPE } from './store/PostReducer';
import  PostDisplay from './PostDisplay'

import logo from './logo.svg';
import './App.css';
// import {Provider} from "react-redux";
// import configureStore from "./store/configureStore";

function App() {

  const [userid,setUserId] = useState(0);
  const dispatch = useDispatch();
  const [postid,setPostId] = useState(0);



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



  const onChangePostId = async (e:React.ChangeEvent <HTMLInputElement>) => {

   const postIdFromInput = e.target.value ? Number(e.target.value):0;

   setPostId(postIdFromInput);

   const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts/" 
   + postIdFromInput)

   if(postResponse.ok){

    const post = await postResponse.json()
    console.log("post",post)


    dispatch({

      type:POST_TYPE,
      payload:{
        id:post.id,
        title:post.title,
        body:post.body
      }
    })
   }
  }
  


  return (
    <>
    <div className="App">
        <label> user id</label>
        <input type="number" value={userid} onChange={onChangeUserId} />
    </div>
    <UserDisplay/>


    <div className="App">
        <label> post id</label>
        <input type="number" value={userid} onChange={onChangePostId} />
    </div>
    <PostDisplay/>
    </>
  );
}

export default App;
