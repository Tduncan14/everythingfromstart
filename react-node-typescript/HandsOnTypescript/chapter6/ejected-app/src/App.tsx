import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayText from './displayText';

function App() {


  const getUserFullname = async (username:string) :Promise<string> => {

   const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");

   if(usersResponse.ok){
     const users = await usersResponse.json()
     const userByName = users.find((user:any) => {

      return user.username.toLowerCase() === username;
 
 
 
    })

    return userByName.name;

   }

   return "";

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

        <DisplayText />
      </header>
    </div>
  );
}

export default App;
