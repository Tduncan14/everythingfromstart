import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from'react-router-dom'
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

function App() {
  return (
   <Switch>
     <Route exact={true} path="/" component={ScreenA} />
     <Route path="/b" component={ScreenB} />
   </Switch>
  );
}

export default App;
