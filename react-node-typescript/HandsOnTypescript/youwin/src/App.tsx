import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


   const reducer = ( state: any, action:any) =>{

       console.log("enteredNameReducer");

       switch(action.type){
          case "enteredName":
             if(state.enteredName === action.payload){
                  return state
             }

            return {...state, enteredName: action.payload}

          case "message":
             return {...state, message:`Hello, ${action.payload}`}

            default:
               throw new Error(`Invalid action type ${action.type}`)

            
            
       }
   }


   const initialState = {
     enteredName:"",
     message:""
   }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
