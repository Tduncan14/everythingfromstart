import React from 'react';
import Home from './Home';
import AnotherScreen from './AnotherScreen';
import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Switch>
 
      <Route  exact={true} path="/" component={Home}> </Route>
        <Route  path="/another" component={AnotherScreen}></Route>
        
      </Switch>

      
    </div>
  );
}

export default App;
