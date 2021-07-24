import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';


const App = () => {

  const [counter,setCounter] = useState<number>(0)


 const handleCounter = (operation) => {

    if(operation === "add") {
      return setCounter(counter + 1)
    }


    return setCounter(counter - 1)


 }


 return(

  <div>
   {counter}
   <p>
     <button onClick = {() => handleCounter('add')}> + Add</button>
     <button onClick={() => handleCounter("add")}> - Subtract</button>
   </p>
   </div>
 )





}

export default App;
